<script setup>
import { onMounted, ref } from 'vue';
import { Loading } from 'quasar';
import { labels, rules } from 'boot/helpers';

const form = ref({});
const generalForm = ref({
  clinic_name: '',
  contact_no: '',
  default_country_code: '',
  email: '',
  specialities: '',
  email_verified: false,
  payment_gateway: [],
});

async function saveSetting() {
  const validate = await form.value.validate();
  generalForm.value.sectionName = props.sectionName;
  generalForm.value.setting_country_id = '';
  generalForm.value.setting_state_id = '';
  generalForm.value.setting_city_id = '';
  if (validate.valid) {
    api.post({
      url: '/admin/settings',
      params: generalForm.value,
      snackbar,
      loadingItem: loading
    })
  }
}

onMounted(()=>{
  if(Loading.isActive){
    Loading.hide();
  }
})
</script>

<template>
  <q-page class="row justify-evenly">
    <div class="col">
      <q-card>
        <q-card-section>
          <q-tab>

          </q-tab>
          <q-tab-panel>
            <q-card class="border">
              <q-card-section>
                <q-form ref="form" @submit.prevent="saveSetting">
                  <div class="col-12 col-sm-6">
                    <q-input
                      :label="labels.setting.clinic_name + ' *'"
                             v-model="generalForm.clinic_name"
                             :rules="rules.required"
                    />
                  </div>
                </q-form>
              </q-card-section>
            </q-card>
          </q-tab-panel>
        </q-card-section>
      </q-card>
    </div>

<!--            <v-col cols="12" sm="6">-->
<!--              <v-text-field-->
<!--                :label="labels.setting.clinic_name + ' *'"-->
<!--                v-model="generalForm.clinic_name"-->
<!--                :rules="rules.required"-->
<!--                hide-details="auto"-->
<!--              >-->
<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12" sm="6">-->
<!--              <v-text-field-->
<!--                :label="labels.patient.contact_no + ' *'"-->
<!--                v-model="generalForm.contact_no"-->
<!--                :rules="rules.required"-->
<!--                hide-details="auto"-->
<!--              >-->
<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            &lt;!&ndash;                        <v-col cols="12" sm="6">&ndash;&gt;-->
<!--            &lt;!&ndash;                            <countries&ndash;&gt;-->
<!--            &lt;!&ndash;                                :label="labels.setting.default_country_code+' *'"&ndash;&gt;-->
<!--            &lt;!&ndash;                                v-model="generalForm.default_country_code"&ndash;&gt;-->
<!--            &lt;!&ndash;                                :rules="rules.required"&ndash;&gt;-->
<!--            &lt;!&ndash;                            ></countries>&ndash;&gt;-->
<!--            &lt;!&ndash;                        </v-col>&ndash;&gt;-->
<!--            <v-col cols="12" sm="6">-->
<!--              <v-text-field-->
<!--                :label="labels.user.email + ' *'"-->
<!--                v-model="generalForm.email"-->
<!--                :rules="rules.required"-->
<!--                hide-details="auto"-->
<!--              >-->
<!--              </v-text-field>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <specializations-->
<!--                :label="labels.setting.specialities + ' *'"-->
<!--                v-model="generalForm.specialities"-->
<!--                :rules="rules.required"-->
<!--              ></specializations>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <v-checkbox-->
<!--                :label="-->
<!--                  labels.setting-->
<!--                    .do_not_allow_to_login_without_email_verification-->
<!--                "-->
<!--                v-model="generalForm.email_verified"-->
<!--                hide-details="auto"-->
<!--              ></v-checkbox>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              <currencies-->
<!--                :label="labels.setting.currency + ' *'"-->
<!--                v-model="generalForm.currency"-->
<!--                :rules="rules.required"-->
<!--              ></currencies>-->
<!--            </v-col>-->
<!--            <v-col cols="12">-->
<!--              &lt;!&ndash;                            <v-card variant="text">&ndash;&gt;-->
<!--              &lt;!&ndash;                                <v-card-title>{{ labels.appointment.payment_method }}</v-card-title>&ndash;&gt;-->
<!--              &lt;!&ndash;                                <v-card-text>&ndash;&gt;-->
<!--              &lt;!&ndash;                                    <v-checkbox&ndash;&gt;-->
<!--              &lt;!&ndash;                                        v-for="(paymentGateway,key) in paymentGateways"&ndash;&gt;-->
<!--              &lt;!&ndash;                                        :label="paymentGateway+' *'"&ndash;&gt;-->
<!--              &lt;!&ndash;                                        v-model="generalForm.payment_gateway[key]"&ndash;&gt;-->
<!--              &lt;!&ndash;                                        :id="key"&ndash;&gt;-->
<!--              &lt;!&ndash;                                        hide-details="auto"&ndash;&gt;-->
<!--              &lt;!&ndash;                                    >&ndash;&gt;-->
<!--              &lt;!&ndash;                                    </v-checkbox>&ndash;&gt;-->
<!--              &lt;!&ndash;                                </v-card-text>&ndash;&gt;-->
<!--              &lt;!&ndash;                            </v-card>&ndash;&gt;-->
<!--            </v-col>-->
<!--          </v-row>-->
<!--        </v-card-text>-->
<!--        <v-card-actions>-->
<!--          <v-btn color="primary" type="submit" variant="flat" :loading="loading"-->
<!--            >{{ labels.btn.save_changes }}-->
<!--          </v-btn>-->
<!--        </v-card-actions>-->
<!--      </v-form>-->
<!--    </v-card>-->
  </q-page>
</template>

<style scoped lang="scss"></style>
