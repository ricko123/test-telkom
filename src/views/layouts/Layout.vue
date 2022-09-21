<template>
  <section>
   <Header/>
   <div class="content">
    <v-app>
      <router-view></router-view>
    </v-app>
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Header from './Header.vue'
import Component from 'vue-class-component'
@Component({
  components: {
    Header
  }
})
export default class Layout extends Vue {

}
</script>
