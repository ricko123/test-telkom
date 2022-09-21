<template>
  <ValidationProvider :rules="rules" :name="name">
    <b-form-group slot-scope="{ valid, errors }" class="mb-4">
      <div v-if="activeLable" class="label-input d-flex align-items-center">
        {{ label }}
      </div>
      <b-form-input
        :type="type"
        :value="computedValue"
        v-model="modValue"
        @input="input"
        :state="errors[0] ? false : valid ? true : null"
        :placeholder="placeholder"
        class="text-field"
      >
      </b-form-input>
      <b-form-invalid-feedback id="inputLiveFeedback">
        {{ errors[0] }}
      </b-form-invalid-feedback>
    </b-form-group>
  </ValidationProvider>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { ValidationProvider } from 'vee-validate'
import { Prop, Model, Emit } from 'vue-property-decorator'
@Component({
  components: {
    ValidationProvider
  }
})
export default class TextInput extends Vue {
  @Model('input', { type: String }) value!: string;
  @Prop() rules!: string;
  @Prop() name!: string;
  @Prop() type!: string;
  @Prop() placeholder!: string;
  @Prop() label!: string;
  @Prop() src!: string;
  @Prop() alt!: string;
  @Prop() activeLable!: boolean;

  modValue = '';

  get computedValue () {
    if (this.value) {
      this.modValue = this.value
    }
    return this.modValue
  }

  @Emit()
  input () {
    return this.modValue ? this.modValue : ''
  }
}
</script>
