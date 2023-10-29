<script lang="ts">
  import { defineComponent } from 'vue';
  import { requestAddressCreation } from '../utils/axios/axiosApi';

  export default defineComponent({
    data() {
      return {
        address: {
          postalCode: '',
          publicPlace: '',
          complement: '',
          district: '',
          city: '',
          state: ''
        },
        isPostalCodeInvalid: false,
        isPostalCodeValid: false,
        isCreated: false,
      };
    },
    watch: {
      'address.postalCode': function (newPostalCode:string, _oldPostalCode:string) {
        if(newPostalCode.length === 8) {
          this.searchByPostalCode(this.address.postalCode);
        } else {
          this.isPostalCodeInvalid = false;
        }
      }
    },
    methods: {
      async createAddress() {
        await requestAddressCreation(this.address);
        this.isCreated = true;
        this.$router.push('/address');
        
      },
      async searchByPostalCode(postalCode:string) {
        const addressInfo = await fetch(`https://viacep.com.br/ws/${postalCode}/json/`);
        const addressInfoParsed = await addressInfo.json();
        if (addressInfoParsed.erro) {
          this.isPostalCodeInvalid = true;
        }
        
        this.isPostalCodeValid = true;
        this.address.publicPlace = addressInfoParsed.logradouro;
        this.address.complement = addressInfoParsed.complemento;
        this.address.district = addressInfoParsed.bairro;
        this.address.city = addressInfoParsed.localidade;
        this.address.state = addressInfoParsed.uf;


      },
    },
  });
</script>

<template>
  <div>
    <form class="box is-narrow is-vcentered" @submit.prevent="createAddress">
      <h1 class="title">Criar Endereço</h1>
      <div class="field">
        <label class="label">CEP</label>
        <div class="control">
          <input
           class="input"
           :class="{'input is-success':isPostalCodeValid, 'input is-danger': isPostalCodeInvalid}" 
           v-model="address.postalCode"
           type="text"
           required >
        </div>
        <p v-if="isPostalCodeInvalid" class="help is-danger">Insira um CEP válido</p>
        <p v-if="isPostalCodeValid" class="help is-success">CEP encontrado com sucesso</p>
      </div>

      <div class="field">
        <label class="label">Logradouro</label>
        <div class="control">
          <input class="input" v-model="address.publicPlace" type="text" required :readonly="isPostalCodeValid">
        </div>
      </div>

      <div class="field">
        <label class="label">Complemento (Opcional)</label>
        <div class="control">
          <input class="input" v-model="address.complement" type="text">
        </div>
      </div>

      <div class="field">
        <label class="label">Bairro</label>
        <div class="control">
          <input class="input" v-model="address.district" type="text" :readonly="isPostalCodeValid" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Cidade</label>
        <div class="control">
          <input class="input" v-model="address.city" type="text" :readonly="isPostalCodeValid" required>
        </div>
      </div>

      <div class="field">
        <label class="label">Estado</label>
        <div class="control">
          <input class="input" v-model="address.state" type="text" :readonly="isPostalCodeValid" required>
        </div>
      </div>
      <div v-if="isCreated" class="field">
        <p class="has-text-success">Endereço criado com sucesso!</p>
      </div>
      
      <div class="field">
        <div class="control">
          <button class="button is-primary" type="submit">Criar Endereço</button>
        </div>
      </div>
    </form>
  </div>
</template>

<style scoped>
</style>