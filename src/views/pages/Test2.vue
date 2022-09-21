<template>
  <section>
    <h1>Test 2</h1>
    <div>
      Input String = {{ myString }} <br/>
      Out = {{ handling }}
    </div>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'

export default class Test2 extends Vue {
  myString = 'the quick brown fox jumps then quickly blow air fox'
  // myResult:

  get handling () {
    const myResult = this.myString.split(' ')
    // const uniq = [...new Set(this.myResult)]
    const uniq = myResult.filter((element, index) => {
      return myResult.indexOf(element) === index
    })
    return uniq
  }
}
</script>
