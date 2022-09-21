<template>
  <v-main>
    <router-view/>
  </v-main>
</template>

<style lang="scss">
@import "~bootstrap-vue/dist/bootstrap-vue.css";
@import "assets/sass/style.vue";
</style>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'App'
})
</script>
