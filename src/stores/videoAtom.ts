import {defineStore} from "pinia";
import { youtubeApi } from "../api/youtube";
import { Video } from "../ts/video";

interface State {
  videoData: Video[] | null;
  queryWord: string;
  isJapMovie: boolean;
}

export const useVideoStore = defineStore({
  id: "video",
  state: (): State => {
    return {
      videoData: null,
      queryWord: "cloudflare",
      isJapMovie: false,
    };
  },
  getters: {
    videoDesc: (state): any => {
      if (state.videoData) {
        return state.videoData.sort((a, b) => {
          return (
            new Date(b.snippet.publishedAt).getTime() -
            new Date(a.snippet.publishedAt).getTime()
          );
        });
      }
      return null;
    },
  },
  actions: {
    async search(videoAtom: State): Promise<void> {
      this.videoData = await youtubeApi.searchVideos(
        videoAtom.queryWord,
        videoAtom.isJapMovie
      );
    },
  },
});
