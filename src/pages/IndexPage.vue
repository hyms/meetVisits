<script setup>
import { onMounted } from 'vue';
import { Loading } from 'quasar';

onMounted(()=>{
  if(Loading.isActive){
    Loading.hide();
  }
})
</script>
<template>
  <q-page class="row items-center justify-evenly">
  </q-page>
</template>


