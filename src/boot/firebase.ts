import { boot } from 'quasar/wrappers';
import { firestorePlugin } from 'vuefire';
import firebase from 'firebase/compat/app';
// import 'firebase/analytics';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_APIKEY,
  authDomain: import.meta.env.VITE_AUTHDOMAIN,
  projectId: import.meta.env.VITE_PROJECTID,
  storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  appId: import.meta.env.VITE_APPID,
  measurementId: import.meta.env.VITE_MEASUREMENTID
};
// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const analytics = firebase.analytics();
const auth = firebaseApp.auth();
const db = firebaseApp.firestore();

export default boot(async ({ app, router }) => {
  // instantiate vuefire for firestore
  app.use(firestorePlugin);
  // // create firebase prototypes for use in the app
  // app.config.globalProperties.$firestore = firebase.firestore()
  // app.config.globalProperties.$auth = auth;
  // app.config.globalProperties.$db = db;
  //
  // // this prototype allows the app to react to authentication
  // // event changes -- eliminates the need for a vuex auth store
  app.config.globalProperties.$loggedIn = false;

  // router.beforeEach((to, from, next) => {
  //   const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  //   console.log(useFirebaseAuth.currentUser);
  //   if (requiresAuth && !useFirebaseAuth.currentUser) {
  //     next('/login');
  //   } else {
  //     next();
  //   }
  // });
  router.beforeEach((to, from, next) => {
    // most common use case is that the user is logged in so just run next()
    // console.log('router.beforeEach to: ', to.path)

    // if (app.config.globalProperties.$loggedIn) {
    //     next();
    // } else {
      const requiresAuth = to.matched.some(
        (record) => record.meta.requiresAuth
      );
      auth.onAuthStateChanged((user) => {
        if (user) {
          app.config.globalProperties.$user = user;
          app.config.globalProperties.$loggedIn = true;
        } else {
          app.config.globalProperties.$user = null;
          app.config.globalProperties.$loggedIn = false;
        }
        if (requiresAuth && !app.config.globalProperties.$loggedIn) {
          router.replace('/Login');
        } else if (app.config.globalProperties.$loggedIn && to.fullPath === '/Login') {
          // router.replace('/');
          next('/');
        } else {
          next();
        }
      });
    // }
  });
});

export { auth, db };
