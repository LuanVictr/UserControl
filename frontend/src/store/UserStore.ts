import { defineStore } from "pinia";
import IUserSaved from "../interfaces/IUserSaved";

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    userData: {},
    tokenValue: ''
  }),

  getters: {
    user: (state) => state.userData,
    token: (state) => state.tokenValue,
  },

  actions: {
    setUser(user:IUserSaved) {
      this.userData = user;
    },
    setToken(token:string) {
      this.tokenValue = token;
    }
  }
  
});

export default useUserStore;