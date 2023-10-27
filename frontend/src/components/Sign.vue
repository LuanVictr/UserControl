<script lang="ts">
  import { defineComponent } from 'vue';
  import IUser from '../interfaces/IUser';
import { requestUserCriation } from '../utils/axios/axiosApi';

  export default defineComponent({
    data() {
      return {
        email: '',
        password: '',
        created: false,
      };
    },
  methods: {
    async createAccount() {
      const body:IUser = {
        email: this.email,
        password: this.password,
        role: 'USER',
      }
      await requestUserCriation(body);
      this.created = true;
      
    },
    returnToLogin() {
      this.$router.push('/login');
    }
  }
});
</script>

<template>
  <div class="container">
    <div class="columns is-centered">
      <div class="column is-half">
        <img src="../assets/loginpage.png" alt="people-image" />
      </div>
      <div class="column is-half">
        <h1 class="title has-text-centered">Crie sua conta</h1>
        <div class="box">
          <form @submit.prevent="createAccount">
            <div class="field">
              <label class="label">Email</label>
              <div class="control">
                <input v-model="email" class="input" type="email" placeholder="Digite seu Email" required>
              </div>
            </div>
            
            <div class="field">
              <label class="label">Senha</label>
              <div class="control">
                <input v-model="password" class="input" type="password" placeholder="Digite sua senha" required>
              </div>
              <p class="help is-success" v-if="created">Usuário registrado com sucesso, volte ao login</p>
            </div>

            <div class="field is-grouped">
              <div class="control">
                <button type="submit" class="button is-primary">Criar Conta</button>
              </div>
              <div class="control">
                <button @click="returnToLogin" class="button is-text">Cancelar</button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>