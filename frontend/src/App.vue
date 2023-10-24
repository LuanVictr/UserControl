<script setup lang="ts">
  import Header from "./components/Header.vue"

</script>

<template>
  <main class="main">
    <div>
      <Header />
      <router-view></router-view>
    </div>
  </main>
</template>

<style scoped>

</style>
