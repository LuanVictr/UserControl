<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Header',
    methods: {
      navigateToLogin() {
        this.$router.push({ path: "/login" });
      }
    }
  })

</script>

<template>
  <div class='header'>
    <p>imagem</p>
    <nav class='navbar'>
      <button
        class='button is-ghost is-rounded'
        @click="navigateToLogin"
       >
        Login
      </button>
    </nav>
  </div>

</template>

<style scoped>

  .header { 
    align-items: center;
    height: 70px;
    display: flex;
    justify-content: space-around;
    border: 1px solid black;
  }

  .header button {
    margin-top: 6px;
  }

</style>