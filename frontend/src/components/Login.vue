<script lang="ts">
  import { defineComponent } from 'vue';
  import useUserStore from '../store/UserStore';
  import { requestLogin } from '../utils/axios/axiosApi';

  export default defineComponent({
    name: 'Login',
      data() {
      return {
        email: '',
        password: '',
        errorMessage: '',
      };
    },
    methods: {
      async login () {
        const userStore = useUserStore();

        try {
          const body = {email: this.email, password: this.password};
          const response = await requestLogin(body);
          userStore.setUser(response.user);
          userStore.setToken(response.token);
          
          if (response.user.role == "USER") {
            this.$router.push('/address')
          }

        } catch (error) {
          this.errorMessage = "Usuário ou senha inválidos";
        }


      },
    },
  });

</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <img src='../assets/loginpage.png' alt="frontend/src/images/usercontrol-logo.png" style="width: 100%; height: fit-content;">
      </div>
      <div class="column is-half">
        <section class="section">
          <h1 class="title is-3">Login</h1>
          <div class="field">
            <label class="label">E-mail</label>
            <div class="control">
              <input class="input" type="email" v-model="email" placeholder="Seu e-mail">
            </div>
          </div>

          <div class="field">
            <label class="label">Senha</label>
            <div class="control">
              <input class="input" type="password" v-model="password" placeholder="Sua senha">
            </div>
            <p class="help is-danger">{{errorMessage}}</p>
          </div>

          <div class="field">
            <div class="control">
              <button class="button is-primary" @click="login">Login</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>