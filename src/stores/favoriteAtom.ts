import {defineStore} from "pinia";

interface State {
  favorites: any;
}

export const useFavoriteStore = defineStore({
  id: "video",
  state: (): State => {
    return {
      favorites: null,
    };
  },
  getters: {},
  actions: {
    getFavorites(favorites:any) {
      this.favorites = favorites;
    },
  },
});
