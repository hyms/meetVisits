<script setup>
import {useRoute, useRouter} from 'vue-router';
import { labels} from 'boot/helpers';
import { auth } from 'boot/firebase';
// import DialogDefault from '@/Components/dialogs/DialogForm.vue';

const router = useRouter();
const route = useRoute();
// const passwordDialog = ref(false);
// const passwordForm = ref({
//     current_password: '',
//     new_password: '',
//     confirm_password: '',
// });

// async function savePasswordModal() {
//     api.put({
//         url: '/change-user-password',
//         params: passwordForm.value,
//         loadingItem: loading,
//         snackbar,
//         onSuccess: () => {
//             helpers.resetForm(passwordForm.value);
//             passwordDialog.value = false;
//         }
//     });
// }

// function closeModal() {
//     passwordDialog.value = false;
// }
function logout() {
  auth
    .signOut()
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.error(error.code);
    });
}
</script>
<template>
<!--    <dialog-default-->
<!--        v-model='passwordDialog'-->
<!--        :on-save='savePasswordModal'-->
<!--        :on-close='closeModal'-->
<!--        :title='labels.btn.change_password'-->
<!--        :loading='loading'-->
<!--        max-width='400'-->
<!--    >-->
<!--        <v-row>-->
<!--            <v-col cols='12'>-->
<!--                <v-text-field-->
<!--                    v-model='passwordForm.current_password'-->
<!--                    :label='labels.user.current_password'-->
<!--                    :rules='rules.required.concat(rules.min(6))'-->
<!--                    type='password'-->
<!--                    hide-details='auto'-->
<!--                ></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols='12'>-->
<!--                <v-text-field-->
<!--                    v-model='passwordForm.new_password'-->
<!--                    :label='labels.user.new_password'-->
<!--                    :rules='rules.required.concat(rules.min(6))'-->
<!--                    type='password'-->
<!--                    hide-details='auto'-->
<!--                ></v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols='12'>-->
<!--                <v-text-field-->
<!--                    v-model='passwordForm.confirm_password'-->
<!--                    :label='labels.user.confirm_password'-->
<!--                    :rules='rules.required.concat(rules.min(6).concat(rules.equalValue(passwordForm.new_password)))'-->
<!--                    type='password'-->
<!--                    hide-details='auto'-->
<!--                ></v-text-field>-->
<!--            </v-col>-->
<!--        </v-row>-->
<!--    </dialog-default>-->

    <q-btn round push color='secondary' icon='fa-solid fa-user' class='ma-1'>
        <q-menu>
          <q-card style="width: 180px">
            <q-list >
              <q-item
                clickable
                v-ripple
                @click="router.push('/profile/edit')"
                :active="route.fullPath === '/profile'"
              >
                <q-item-section> {{ labels.btn.profile }}</q-item-section>
              </q-item>
<!--              <v-list-item-->
<!--                @click='passwordDialog=true'-->
<!--              >-->
<!--                <v-list-item-title>{{ labels.btn.change_password }}</v-list-item-title>-->
<!--              </v-list-item>-->
                <q-item
                clickable
                v-ripple
                @click="logout()"
              >
                  <q-item-section>  {{ labels.btn.logout }}</q-item-section>
              </q-item>
            </q-list>
          </q-card>
        </q-menu>
    </q-btn>
</template>
