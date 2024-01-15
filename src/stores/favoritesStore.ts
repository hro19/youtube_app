import { defineStore } from "pinia";
import { FavoriteVideo } from "../ts/video";

interface State {
    favorites: FavoriteVideo[];
}

export const useFavoriteStore = defineStore({
  id: "favorite",
  state: (): State => {
    return {
      favorites: [],
    };
  },
  getters: {
    // お気に入りの動画一覧を取得するgetter
    getFavorites: (state): FavoriteVideo[] => {
      return state.favorites;
    },
  },
  actions: {
    // favoritesを引数の値でセットするsetter
    async setFavorites(favorites: FavoriteVideo[]): Promise<void> {
      this.favorites = favorites;
    },
    // 引数の値を現在のfavoritesの配列にpushするsetter
    async pushToFavorites(video: FavoriteVideo): Promise<void> {
      this.favorites.push(video);
    },
  },
});
