import {defineStore} from "pinia";
import { youtubeApi } from "../api/youtube";
import { Video } from "../ts/video";

interface State {
	videoData: Video[] | null;
	queryWord: string;
}

export const useCounterStore = defineStore({
  id: "video",
  state: (): State => {
    return {
		videoData: null,
		queryWord: "cloudflare",
    };
  },
  getters: {
    // doubleCount: (state): any => {
    //   return state.videoData * 2;
    // },
  },
  actions: {
	async search(word: string): Promise<void> {
		this.videoData = await youtubeApi.searchVideos(word);
	},
  },
});
