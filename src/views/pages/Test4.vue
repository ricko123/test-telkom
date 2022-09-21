<template>
  <section>
    <h1>Test 4</h1>
    <table class="tableProduct">
      <tr>
        <th>Nama Produk</th>
        <th>Harga Terendah</th>
        <th>Harga Tertinggi</th>
        <th>Kategori Produk</th>
      </tr>
      <tr v-for="(list, index) in dataTable" v-bind:key="index">
        <td>{{list.namaProduct}}</td>
        <td>{{list.hargaTertinggi}}</td>
        <td>{{list.hargaTerendah}}</td>
        <td>{{list.kategoriProduk}}</td>
      </tr>
    </table>
  </section>
</template>
<script lang="ts">
import Vue from 'vue'
export default class Test4 extends Vue {
    dataTable = [
      {
        namaProduct: 'HARFLEX MINI 80',
        hargaTertinggi: '33000',
        hargaTerendah: '80000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'HARFLEX SIRAP 80',
        hargaTertinggi: '38000',
        hargaTerendah: '41000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'HARFLEX SUPER 180',
        hargaTertinggi: '73500',
        hargaTerendah: '73500',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'PRIMA BOARD',
        hargaTertinggi: '51350',
        hargaTerendah: '58700',
        kategoriProduk: 'Wood'
      },
      {
        namaProduct: 'NOX STEL GLOMBANG HARFLEX MINI 105',
        hargaTertinggi: '44000',
        hargaTerendah: '44000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'NOX STEL GLOMBANG HARFLEX MINI 80',
        hargaTertinggi: '33000',
        hargaTerendah: '33000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'NOX HARFLEX GENTENG',
        hargaTertinggi: '33000',
        hargaTerendah: '33000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'NOX STEL GLOMBANG HARFLEX SUPER 04',
        hargaTertinggi: '72000',
        hargaTerendah: '72000',
        kategoriProduk: 'Roof'
      },
      {
        namaProduct: 'VERSA BOARD',
        hargaTertinggi: '45320',
        hargaTerendah: '195400',
        kategoriProduk: 'Board'
      },
      {
        namaProduct: 'VERSA SPEND',
        hargaTertinggi: '16000',
        hargaTerendah: '16000',
        kategoriProduk: 'Board'
      }
    ]
}
</script>
