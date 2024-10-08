<template>
  <q-page>
    <q-form @submit="handleSubmit">
      <q-input
        filled
        v-model="email"
        label="Email"
        type="email"
      />
      <q-input
        filled
        v-model="password"
        label="Password"
        type="password"
      />
      <q-btn label="Iniciar sesión" type="submit" color="primary" />
    </q-form>
  </q-page>
</template>
<script setup lang="ts">
import { ref } from 'vue';
import { supabase } from '../supabase';

const email = ref('');
const password = ref('');

const handleSubmit = async () => {
  const { error } = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.error(error);
    // Manejar el error de inicio de sesión
  } else {
    // Redirigir a la página principal o mostrar un mensaje de éxito
  }
};
</script>
