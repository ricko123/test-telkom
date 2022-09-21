<template>
  <model-list-select
    v-model="modValue"
    :list="list"
    option-text="text"
    option-value="value"
    :required="true"
    :value="computedValue"
    :placeholder="placeholder"
    class="select-option"
    @input="input"
  ></model-list-select>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
import { Prop, Emit, Model } from 'vue-property-decorator'
import { ModelListSelect } from 'vue-search-select'
@Component({
  components: {
    ModelListSelect
  }
})
export default class SelectAutocomplete extends Vue {
  @Model('input', { type: String }) value!: string;
  @Prop() placeholder!: string;
  @Prop() list!: [];
  @Prop() required!: boolean;

  modValue: string | null = null;

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
