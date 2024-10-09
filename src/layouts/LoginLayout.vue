<script setup>
import {ref} from 'vue';
import {supabase} from 'boot/supabase';

const email = ref('');
const password = ref('');
const messageError = ref('');

const handleSubmit = async () => {
  const {error} = await supabase.auth.signInWithPassword({
    email: email.value,
    password: password.value,
  });

  if (error) {
    console.error(error);
    messageError.value=error.message
    // Manejar el error de inicio de sesión
  } else {
    messageError.value='success'
    // Redirigir a la página principal o mostrar un mensaje de éxito
  }
};
</script>
<template>
  <q-layout view="lHh lpR lFf">
    <q-page-container>
      <q-page>
        <q-banner class="bg-primary text-white" v-if="messageError">
          {{messageError}}
          <template v-slot:action>
            <q-btn flat color="white" label="Dismiss"/>
            <q-btn flat color="white" label="Update Credit Card"/>
          </template>
        </q-banner>
        <q-form @submit.prevent="handleSubmit">
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
          <q-btn label="Iniciar sesión" type="submit" color="primary"/>
        </q-form>
      </q-page>
    </q-page-container>

  </q-layout>
</template>
