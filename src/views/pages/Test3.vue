<template>
  <section>
    <h1>Test 3</h1>
    <div class="container">
        <v-card flat outlined tile>
          <v-card-title>Form Validate</v-card-title>
          <v-card-text>
            <v-form ref="formInput">
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    :rules="[v => utils.validator.required(v), v => utils.validator.minLength(v, 3)]"
                    label="Nama Developer"
                    v-model="nama"
                  />
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="12" md="6">
                  <v-text-field
                    :rules="[v => utils.validator.required(v), v => utils.validator.email(v)]"
                    label="Email"
                    v-model="email"
                  />
                </v-col>
              </v-row>
              <v-row class="mb-3">
                <v-col cols="12" md="6">
                  <v-text-field
                    :rules="[v => utils.validator.required(v)]"
                    label="Phone Number"
                    v-on:keypress="utils.validator.NumbersOnly"
                    v-model="phone"
                  />
                </v-col>
              </v-row>
              <v-card-actions>
                <v-btn color="primary" @click="submit()">Submit</v-btn>
              </v-card-actions>
            </v-form>
          </v-card-text>
        </v-card>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import { Ref } from 'vue-property-decorator'
import utils from '@/utils'

export default class Test3 extends Vue {
 nama: string | null = null
 email: string | null = null
 phone: string | null = null

 utils = utils
 @Ref() formInput!: HTMLFormElement

 submit () {
   if (this.formInput.validate()) {
     console.log('simpan')
   }
 }
}
</script>
