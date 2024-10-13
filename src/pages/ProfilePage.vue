<template>
  <q-page>
    <h1>¡Hola, {{ user.email }}!</h1>
  </q-page>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
// import { auth } from 'boot/firebase';

const user = ref({
  email: ''
});
const session = ref();

onMounted(() => {
  user.value = session.value?.user;
});
</script>
