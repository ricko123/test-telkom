 <template>
  <editor
    :disabled="disabled"
    :init="{
      height: 300,
      branding: false,
      plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount',
      ],
      toolbar:
      'undo redo | formatselect | bold italic backcolor | \
      alignleft aligncenter alignright alignjustify | \
      bullist numlist outdent indent | removeformat | help',
      }"
    :inline="inline"
    :value="computedValue"
    @input="input"
    api-key="b39mkzccs1jpwnq5pejnhywfieb3ux3r7s5r1ffivp7mbv52"
    v-model="modelValue"
  />
</template>

<script lang='ts'>
import Vue from 'vue'
import Editor from '@tinymce/tinymce-vue'
import Component from 'vue-class-component'
import { Emit, Model, Prop } from 'vue-property-decorator'

@Component({
  components: {
    Editor
  }
})
export default class RichTextInput extends Vue {
  @Model('input', { type: String }) value!: string
  @Prop() disabled!: boolean
  @Prop() inline!: boolean

  modelValue = ''

  get computedValue () {
    if (this.value) {
      this.modelValue = this.value
    }
    return this.modelValue
  }

  @Emit()
  input () {
    return this.modelValue ? this.modelValue : ''
  }
}
</script>
