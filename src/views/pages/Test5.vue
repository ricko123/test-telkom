<template>
    <section>
        <h1>Test 5</h1>
        <div id="areaCombination">
        </div>
    </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default class Test5 extends Vue {
  mounted () {
    this.Combination(this.bilangan, this.sumBilangan)
  }

    bilangan = [1, 2, 4, 5, 9];
    sumBilangan = 7;

    Combination (bilangan: any, sumBilangan: number) {
    // Sort the given elements
      bilangan.sort((a, b) => a - b)

      // To store combination
      const local = []

      this.uniqueCombination(0, 0, sumBilangan, local, bilangan)
    }

    uniqueCombination (l, sum, sumBilangan: number, local, bilangan: any) {
      // If a unique combination is found
      if (sum === sumBilangan) {
        document.write('{')
        for (let i = 0; i < local.length; i++) {
          if (i !== 0) document.write(' ')
          document.write(local[i])
          if (i !== local.length - 1) document.write(', ')
        }
        document.write('}' + '<br>')
        return
      }

      // For all other combinations
      for (let i = l; i < bilangan.length; i++) {
        // Check if the sum exceeds K
        if (sum + bilangan[i] > sumBilangan) continue

        // Check if it is repeated or not
        if (i > l && bilangan[i] === bilangan[i - 1]) continue

        // Take the element into the combination
        local.push(bilangan[i])

        // Recursive call
        this.uniqueCombination(i + 1, sum + sumBilangan[i], bilangan, local, sumBilangan)

        // Remove element from the combination
        local.pop()
      }
    }
}
</script>
