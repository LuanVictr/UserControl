<script lang="ts">
  import { defineComponent } from 'vue';

  export default defineComponent({
    name: 'Header',
    methods: {
      navigateToLogin() {
        this.$router.push({ path: "/login" });
      },
      navigateToSignUp() {
        this.$router.push({ path: "/sign" });
      }
    }
  })

</script>

<template>
  <header>
    <div class="container">
      <div class="columns is-vcentered">
        <div class="column is-one-third">
          <img src='../assets/usercontrol-logo.png' alt="Logotipo" style="max-width: 100%; height: 100px;">
        </div>

        <div class="column is-two-thirds has-text-right">
          <button class="button is-primary" @click="navigateToLogin">Login</button>
          <button class="button is-ghost" @click="navigateToSignUp">Cadastre-se</button>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped>

</style>