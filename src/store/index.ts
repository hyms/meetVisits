import { store } from 'quasar/wrappers';
import { createComposable, createStore, Module } from 'vuex-smart-module';

const rootConfig = {
  modules: {
    // auth
  },
};
export const root = new Module(rootConfig);

export default store(function (/* { ssrContext } */) {
  return createStore(root, {
    strict: !!process.env.DEBUGGING,
    // plugins: []
    // and other options, normally passed to Vuex `createStore`
  });
});

export const useStore = createComposable(root);
