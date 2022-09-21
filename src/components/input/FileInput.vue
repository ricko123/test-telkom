<template>
  <div class="noimg">
    <a href="javascript:;" class="d-flex align-items-center" @click="onElementClick()">
      <img
        :src="require(`@/assets/img/${src}`)"
        alt=""
        :class="onActive === true ? 'd-block' : 'd-none'"
      />
      <img
        :src="srcPreview"
        alt=""
        :class="onPreview === true ? 'd-block' : 'd-none'"
      />
      <input
        class="d-none"
        type="file"
        :accept="accept"
        ref="fileChoose"
        @change="onSelectFile"
      />
      <!-- <input type="text" v-model="modValue" @input="input" class="d-none" /> -->
      <div class="ml-3">{{ !fileImage ? 'Upload Image':fileImage.name }}</div>
    </a>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'
import { Component, Ref, Prop } from 'vue-property-decorator'
@Component({
  components: {}
})
export default class FileInput extends Vue {
  // @Model('input', { type: Number }) value!: number;
  @Prop() rules!: string;
  @Prop() name!: string;
  @Prop() type!: string;
  @Prop() src!: string;
  @Prop() accept!: string;
  @Prop() maxSizeImgInKb!: number;
  @Prop() maxSizeVideoInKb!: number;

  @Ref() fileChoose!: HTMLElement;

  // helper: HelperModel = new HelperModel();
  onActive = true;
  onPreview = false;
  onPreviewVideo = false;
  modValue: number | null = null;
  srcPreview: string | ArrayBuffer | null = '';
  fileImage: File | null = null;
  image = null;
  onElementClick () {
    if (this.fileChoose) {
      this.fileChoose.click()
    }
  }

  onSelectFile (payload) {
    const input = payload.target
    const files = input.files
    if (files && files[0]) {
      const reader = new FileReader()
      if (this.fileMaxImage(files[0].size, this.maxSizeImgInKb)) {
        reader.onload = (payload) => {
          if (payload.target) {
            this.srcPreview = payload.target.result
            this.fileImage = files[0]
            // return new Promise((resolve, reject) => {
            //   if (this.fileImage) {
            //     api.helper
            //       .uploadFile(this.fileImage, this.fileImage.name)
            //       .then((response) => {
            //         this.helper = Object.assign({}, response.data)
            //         this.modValue = this.helper.media_id
            //         resolve(response)
            //       })
            //       .catch((err) => {
            //         reject(new Error(err))
            //       })
            //   }
            // })
          }
        }
        reader.readAsDataURL(files[0])
        this.$emit('input', files[0])
        this.onPreview = true
        this.onPreviewVideo = false
        this.onActive = false
      }
    }
  }

  fileMaxImage (size: number, max: number) {
    const maxFile = max * 1000
    if (size <= maxFile) {
      return true
    } else {
      return false
    }
  }

  // @Watch('modValue')
  // onChangeDatePicker () {
  //   this.input(this.modValue)
  // }

  // @Emit()
  // input (value: number | null) {
  //   return value
  // }
}
</script>
