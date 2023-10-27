import { defineStore } from "pinia";
import IUser from "../interfaces/IUser";

const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    user: {}
  }),

  getters: {
    user: (state) => state.user,
  },

  actions: {
    setUser(user:IUser) {
      this.user = user;
    }
  }
  
})