<script setup>
import { onMounted, ref } from 'vue';
import { auth, db } from 'boot/firebase';
import { labels } from 'boot/helpers';
import { useRouter, useRoute } from 'vue-router';
import { Loading } from 'quasar';
// import MenuUser from '@/Components/MenuUser.vue';

const menuItems = ref([]);
const user = ref({});
const router = useRouter();
const route = useRoute();

// const dialogDoctor = ref(false);
async function getUser() {
  let document = await db.collection('users').doc(auth.currentUser.uid).get();
  if (document.exists) {
    user.value = document.data();
  }
}

function loadMenu() {
  menuItems.value.push({
    label: labels.menu.dashboard,
    url: '/',
    activate: ['/admin/dashboard'],
    icon: 'fa-regular fa-map',
    subItems: [],
  });
  // if (globals.userPermision(['manage_staff'])) {
  //     menuItems.value.push({
  //         label: labels.menu.staffs,
  //         url: '/admin/staffs',
  //         activate: ['/admin/staffs'],
  //         icon: '',
  //         subItems: [],
  //     });
  // }
  // if (globals.rolePermision(['doctor'])) {
  //     menuItems.value.push({
  //         label: labels.menu.dashboard,
  //         url: '/doctors/dashboard',
  //         activate: ['/doctors/dashboard'],
  //         icon: '',
  //         subItems: [],
  //     });
  //     if (globals.userPermision(['manage_appointments'])) {
  //         menuItems.value.push({
  //             label: labels.menu.appointments,
  //             url: '/doctors/appointments',
  //             activate: ['/doctors/appointments'],
  //             icon: '',
  //             subItems: [],
  //         });
  //     }
  //   // if (globals.userPermision(['manage_transactions'])) {
  //   //     menuItems.value.push({
  //   //         label: labels.menu.transactions,
  //   //         url: '/doctors/transactions',
  //   //         activate: ['/doctors/transactions'],
  //   //         icon: '',
  //   //         subItems: [],
  //   //     });
  //   // }
  //     menuItems.value.push({
  //         label: labels.doctor_session.my_schedule,
  //       url: '',
  //         activate: ['/doctors/doctor-schedule-edit'],
  //         icon: '',
  //         subItems: [],
  //       onClick: () => {
  //         dialogDoctor.value = true;
  //       }
  //     });
  //     // if (globals.userPermision(['manage_patient_visits'])) {
  //     //     menuItems.value.push({
  //     //         label: labels.menu.visits,
  //     //         url: '/doctors/visits',
  //     //         activate: ['/doctors/visits'],
  //     //         icon: '',
  //     //         subItems: [],
  //     //     });
  //     // }
  //     // menuItems.value.push({
  //     //     label: labels.setting.connect_google_calendar,
  //     //     url: '/doctors/connect-google-calendar',
  //     //     activate: ['/doctors/connect-google-calendar'],
  //     //     icon: '',
  //     //     subItems: [],
  //     // });
  //     menuItems.value.push({
  //         label: labels.holiday.holiday,
  //         url: '/doctors/holidays',
  //         activate: ['/doctors/holidays'],
  //         icon: '',
  //         subItems: [],
  //     });
  // }
  // if (globals.rolePermision(['patient'])) {
  //     menuItems.value.push({
  //         label: labels.menu.dashboard,
  //         url: '/patients/dashboard',
  //         activate: ['/patients/dashboard'],
  //         icon: '',
  //         subItems: [],
  //     });
  //     menuItems.value.push({
  //         label: labels.menu.appointments,
  //         url: '/patients/appointments',
  //         activate: ['/patients/appointments', '/patients/patient-appointments-calendar', '/patients/doctors'],
  //         icon: '',
  //         subItems: [],
  //     });
  //   // menuItems.value.push({
  //   //     label: labels.menu.transactions,
  //   //     url: '/patients/transactions',
  //   //     activate: ['/patients/transactions'],
  //   //     icon: '',
  //   //     subItems: [],
  //   // });
  //     // menuItems.value.push({
  //     //     label: labels.menu.reviews,
  //     //     url: '/patients/reviews',
  //     //     activate: ['/patients/reviews'],
  //     //     icon: '',
  //     //     subItems: [],
  //     // });
  //     // menuItems.value.push({
  //     //     label: labels.menu.visits,
  //     //     url: '/patients/patient-visits',
  //     //     activate: ['/patients/patient-visits'],
  //     //     icon: '',
  //     //     subItems: [],
  //     // });
  //     // menuItems.value.push({
  //     //     label: labels.setting.connect_google_calendar,
  //     //     url: '/patients/connect-google-calendar',
  //     //     activate: ['/patients/connect-google-calendar'],
  //     //     icon: '',
  //     //     subItems: [],
  //     // });
  // }
  // if (globals.userPermision(['manage_doctors'])) {
  //     menuItems.value.push({
  //         label: labels.menu.doctors,
  //         url: '',
  //         activate: ['/admin/doctors', '/doctors/doctor-sessions', '/admin/doctor-sessions'],
  //         icon: '',
  //         subItems: [
  //             {
  //                 label: labels.menu.doctors,
  //                 url: '/admin/doctors',
  //             }, {
  //                 label: labels.menu.doctor_sessions,
  //                 url: '/admin/doctor-sessions',
  //             },
  //         ],
  //     });
  // }
  // if (globals.userPermision(['manage_patients'])) {
  //     menuItems.value.push({
  //         label: labels.menu.patients,
  //         url: '/admin/patients',
  //         activate: ['/admin/patients'],
  //         icon: '',
  //         subItems: [],
  //     });
  // }
  // if (!globals.rolePermision(['doctor']) && !globals.rolePermision(['patient'])) {
  //     if (globals.userPermision(['manage_appointments'])) {
  //         menuItems.value.push({
  //             label: labels.menu.appointments,
  //             url: '/admin/appointments',
  //             activate: ['/admin/appointments', '/admin/admin-appointments-calendar', '/admin/prescriptions', '/admin/prescription-medicine-show'],
  //             icon: '',
  //             subItems: [],
  //         });
  //     }
  // }
  // // if (globals.userPermision(['manage_medicines'])) {
  // //     menuItems.value.push({
  // //         label: labels.menu.medicines,
  // //         url: '',
  // //         activate: ['/admin/categories', '/admin/brands', '/admin/medicines', '/admin/medicine-purchase', '/admin/used-medicine', '/admin/medicine-bills'],
  // //         icon: '',
  // //         subItems: [
  // //             {
  // //                 label: labels.menu.medicines,
  // //                 url: '/admin/medicines',
  // //             }, {
  // //                 label: labels.menu.medicine_categories,
  // //                 url: '/admin/categories',
  // //             }, {
  // //                 label: labels.menu.medicine_brands,
  // //                 url: '/admin/brands',
  // //             }, {
  // //                 label: labels.purchase_medicine.purchase_medicines,
  // //                 url: '/admin/medicine-purchase',
  // //             }, {
  // //                 label: labels.used_medicine.used_medicines,
  // //                 url: '/admin/used-medicine',
  // //             }, {
  // //                 label: labels.medicine_bills.medicine_bills,
  // //                 url: '/admin/medicine-bills',
  // //             },
  // //         ],
  // //     });
  // // }
  // if (!globals.rolePermision(['doctor']) && !globals.rolePermision(['patient'])) {
  //   // if (globals.userPermision(['manage_transactions'])) {
  //   //     menuItems.value.push({
  //   //         label: labels.menu.transactions,
  //   //         url: '/admin/transactions',
  //   //         activate: ['/admin/transactions'],
  //   //         icon: '',
  //   //         subItems: [],
  //   //     });
  //   // }
  //     // if (globals.userPermision(['manage_patient_visits'])) {
  //     //     menuItems.value.push({
  //     //         label: labels.menu.visits,
  //     //         url: '/admin/visits',
  //     //         activate: ['/admin/visits'],
  //     //         icon: '',
  //     //         subItems: [],
  //     //     });
  //     // }
  // }
  // if (globals.userPermision(['manage_services'])) {
  //     menuItems.value.push({
  //         label: labels.menu.services,
  //         url: '',
  //         activate: ['/admin/services', '/admin/service-categories'],
  //         icon: '',
  //         subItems: [
  //             {
  //                 label: labels.menu.services,
  //                 url: '/admin/services',
  //             }, {
  //                 label: labels.menu.service_categories,
  //                 url: '/admin/service-categories',
  //             },
  //         ],
  //     });
  // }
  // if (globals.userPermision(['manage_specialities'])) {
  //     menuItems.value.push({
  //         label: labels.menu.specializations,
  //         url: '/admin/specializations',
  //         activate: ['/admin/specializations'],
  //         icon: '',
  //         subItems: [],
  //     });
  // }
  menuItems.value.push({
    label: labels.menu.settings,
    url: '/settings',
    activate: [
      '/admin/settings',
      '/admin/clinic-schedules',
      '/admin/currencies',
      '/admin/roles',
      '/admin/countries',
      '/admin/states',
      '/admin/cities',
      '/admin/holidays',
    ],
    icon: 'fa-solid fa-gear',
    subItems: [
      {
        label: labels.setting.general,
        url: '/admin/settings',
      },
      {
        label: labels.setting.contact_information,
        url: '/admin/settings-contact',
      },
      {
        label: labels.menu.clinic_schedules,
        url: '/admin/clinic-schedules',
      },
      {
        label: labels.holiday.doctor_holiday,
        url: '/admin/holidays',
      },
      {
        //     label: labels.menu.roles,
        //     url: '/admin/roles',
        //     role: 'all',
        // },{
        label: labels.menu.currencies,
        url: '/admin/currencies',
      },
      {
        label: labels.menu.countries,
        url: '/admin/countries',
      },
      {
        label: labels.menu.states,
        url: '/admin/states',
      },
      {
        label: labels.menu.cities,
        url: '/admin/cities',
      },
    ],
  });
}

onMounted(async () => {
  Loading.hide();
  await getUser();
  loadMenu();
  Loading.hide();
  // router.on('success', (event) => {
  //     for (let item of menuItems.value) {
  //         if (item.subItems.length > 0) {
  //             for (let subItem of item.subItems) {
  //                 if (event.detail.page.url === subItem.url) {
  //                     open.value = [item.label];
  //                 }
  //             }
  //         }
  //     }
  // });
});
</script>

<template>
  <q-scroll-area
    style="
      height: calc(100% - 150px);
      margin-top: 150px;
      border-right: 1px solid #ddd;
    "
  >
    <q-list padding>
      <q-item
        v-for="(link, key) in menuItems"
        clickable
        v-ripple
        v-bind:key="key"
        :active="link.activate.includes(route.fullPath)"
        @click="router.push(link.url)"
      >
        <q-item-section avatar>
          <q-icon :name="link.icon" />
        </q-item-section>

        <q-item-section>{{ link.label }}</q-item-section>
      </q-item>
    </q-list>
  </q-scroll-area>
  <q-img
    class="absolute-top"
    src="https://cdn.quasar.dev/img/material.png"
    style="height: 150px"
  >
    <div class="absolute-bottom bg-transparent">
      <q-avatar size="56px" class="q-mb-sm">
        <img src="https://cdn.quasar.dev/img/boy-avatar.png"  alt="imagen"/>
      </q-avatar>
      <div class="text-weight-bold">{{ user.display_name }}</div>
      <div>{{ auth.currentUser.email }}</div>
    </div>
  </q-img>
</template>

<style lang="scss" scoped>
.vertical-nav-header {
  //background: rgba(0, 0, 21, 0.2);
  height: 64px;
}
</style>
