<template>
  <section>
    <h1>Header</h1>
    <ul class="menu">
        <li><a href="/test1">Test 1</a></li>
        <li><a href="/test2">Test 2</a></li>
        <li><a href="/test3">Test 3</a></li>
        <li><a href="/test4">Test 4</a></li>
        <!-- <li><a href="/test5">Test 5</a></li>
        <li><a href="/test6">Test 6</a></li> -->
    </ul>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
import Component from 'vue-class-component'
@Component({
  components: {}
})
export default class Header extends Vue {
}
</script>
