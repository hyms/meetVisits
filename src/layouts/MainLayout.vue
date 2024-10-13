<script setup>
import { onMounted, ref } from 'vue';
// import { auth } from 'boot/firebase';
// import { useQuasar } from 'quasar';
import MainMenu from './../components/MainMenu.vue';
import MenuUser from './../components/MenuUser.vue';

const drawer = ref(false);
// const $q = useQuasar();
function toggleLeftDrawer() {
  drawer.value = !drawer.value;
}


onMounted(()=>{
})
</script>
<template>
  <q-layout view="lHh lpR lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title> Quasar App</q-toolbar-title>
        <MenuUser/>
<!--        <q-btn @click="logout">Salir</q-btn>-->
<!--        <div>Quasar v{{ $q.version }}</div>-->
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="drawer" side="left" bordered>
        <MainMenu />
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
