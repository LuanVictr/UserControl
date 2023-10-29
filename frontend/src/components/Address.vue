<script lang="ts">
  import { defineComponent } from 'vue';
  import AddressComponent from './AddressComponent.vue';
  import VueJsPAginate from 'vuejs-paginate';
  import { requestAddresses } from '../utils/axios/axiosApi';


  export default defineComponent({
    components: {
      AddressComponent,
      paginate: VueJsPAginate,
    },
    data() {
      return {
        addresses: [],
        itemsPerPage: 25,
        currentPage: 1,
        emptyMessage: false
      };
    },
    computed: {
      paginatedAddresses() {
        const startIndex = (this.currentPage - 1) * this.itemsPerPage;
        const endIndex = startIndex + this.itemsPerPage;
        return this.addresses.slice(startIndex, endIndex);
      },
    },
    methods: {
      goToPage(pageNumber:number) {
        this.currentPage = pageNumber;
      },
      async fetchAddresses() {
        try {
          const addresses = await requestAddresses();
          this.addresses = addresses;

          if (addresses.length === 0) {
            this.emptyMessage = true;
          }

        } catch (error:any) {
          console.error('Erro inesperado ao buscar endereços', error);
        }
      },
      navigateToCreateAddress() {
        this.$router.push({ path:'/address/create' });
      },
    },
    created() {
        this.fetchAddresses();
      },
    
  });

</script>

<template>
  <h1 class="title">Endereços</h1>
  <h2 v-if="emptyMessage">Nenhum endereço foi adicionado ainda.</h2>
  <p v-if="emptyMessage">Adicione o primeiro endereço.</p>
  <button
    class="button is-primary"
    @click="navigateToCreateAddress"
   >
    Adicionar Endereço
  </button>
  <div v-for="(address, index) in paginatedAddresses" :key="index">
    <address-component :address="address" />

  </div>

</template>

<style scoped>

</style>