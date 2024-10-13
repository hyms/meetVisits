<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { auth } from 'boot/firebase';
import { useQuasar } from 'quasar';
import { rules } from 'boot/helpers';

const router = useRouter();
const $q = useQuasar();

const email = ref('');
const password = ref('');
const messageError = ref('');
const loading = ref(false);

const handleSubmit = () => {
  $q.loading.show();
  auth
    .signInWithEmailAndPassword(email.value, password.value)
    .then((user) => {
      console.log(user);
      router.push('/');
    })
    .catch((error) => {
      if ('auth/invalid-credential' === error.code) {
        messageError.value = 'Usuario/Contraseña invalida';
      }
      console.error(error.code);
      console.error(error.message);
    })
    .finally(() => {
      $q.loading.hide();
    });

  // let redirect = this.$router.to.fullPath ?? '/';
  // this.$router.push(redirect) // redirect to the feed
};
</script>
<template>
  <q-layout view="lHh lpR lFf">
    <q-page-container>
      <q-page>
        <div class="auth-wrapper auth-v1">
          <div class="auth-inner">
            <div class="q-py-md q-gutter-sm">
              <q-banner
                class="bg-red text-white"
                rounded
                v-if="messageError"
                inline-actions
              >
                {{ messageError }}
                <template v-slot:action>
                  <q-btn
                    flat
                    square
                    icon="closer"
                    color="white"
                    @click="messageError = ''"
                  />
                </template>
              </q-banner>
            </div>
            <q-form @submit.prevent="handleSubmit">
              <q-card class="auth-card">
                <q-card-section>
                  <div class="text-h6">Bienvenido a Clinic</div>
                  <div class="text-subtitle2">
                    Por favor ingresa tu usuario y contraseña
                  </div>
                </q-card-section>
                <q-separator inset />
                <q-card-section>
                  <div class="q-py-md q-gutter-sm">
                    <q-input
                      filled
                      v-model="email"
                      label="Email"
                      type="email"
                      class="q-pa-xs"
                      :rules="rules.required"
                    />
                    <q-input
                      filled
                      v-model="password"
                      label="Password"
                      type="password"
                      class="q-pa-xs"
                      :rules="rules.required"
                    />
                  </div>
                </q-card-section>
                <q-card-actions class="row justify-end">
                  <q-btn
                    label="Iniciar sesión"
                    type="submit"
                    color="primary"
                    :loading="loading"
                    :disable="loading"
                  />
                </q-card-actions>
              </q-card>
            </q-form>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style lang="scss">
.auth-wrapper {
  display: flex;
  min-height: calc(var(--vh, 1vh) * 100);
  width: 100%;
  flex-basis: 100%;
  align-items: center;

  // common style for both v1 and v2
  a {
    text-decoration: unset;
  }

  // auth v1
  &.auth-v1 {
    align-items: center;
    justify-content: center;
    overflow: hidden;
    padding: 1.5rem;

    .auth-mask-bg {
      position: absolute;
      bottom: 0;
      width: 100%;
    }

    .auth-tree,
    .auth-tree-3 {
      position: absolute;
    }

    .auth-tree {
      bottom: 0;
      left: 0;
    }

    .auth-tree-3 {
      bottom: 0;
      right: 0;
    }

    // auth card
    .auth-inner {
      width: 28rem;
      z-index: 1;

      .auth-card {
        padding: 0.9375rem 0.875rem;
      }
    }
  }
}

@media (max-width: 600px) {
  // auth bg and tree hide in sm screen
  .auth-v1 {
    .auth-tree,
    .auth-tree-3,
    .auth-mask-bg {
      display: none;
    }
  }
}
</style>
