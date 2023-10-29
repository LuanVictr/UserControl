<script lang="ts">
  import { defineComponent } from 'vue';


  export default defineComponent({
    data() {
      return {
        address: {
          cep: '',
          publicPlace: '',
          complement: '',
          district: '',
          city: '',
          state: '',
        }
      }
    }
  });

</script>

<template>
  <div class="container">
    <div class="box">
      <h1 class="title">Informações de Endereço</h1>
      <div class="content">
        <p><strong>CEP:</strong> {{ address.cep }}</p>
        <p><strong>Logradouro:</strong> {{ address.publicPlace }}</p>
        <p><strong>Complemento:</strong> {{ address.complement }}</p>
        <p><strong>Bairro:</strong> {{ address.district }}</p>
        <p><strong>Cidade:</strong> {{ address.city }}</p>
        <p><strong>Estado:</strong> {{ address.state }}</p>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>