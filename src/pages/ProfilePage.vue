<template>
  <q-page>
    <h1>¡Hola, {{ user.email }}!</h1>
  </q-page>
</template>

<script setup lang="ts">
import {ref, onMounted} from 'vue';
import { supabase } from 'boot/supabase';

const user = ref({
  email: ''
});
const session = ref();

onMounted(() => {
  user.value = session.value?.user;
  supabase.auth.getSession().then(({data}) => {
    session.value = data.session;
  });

  supabase.auth.onAuthStateChange((_, _session) => {
    session.value = _session;
  });
});
</script>
