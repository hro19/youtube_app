<template>
  <li class="my-3 mx-4">
    <div class="mx-auto p-4 border border-white flex items-center justify-between rounded-lg shadow">
      <div class="flex">
        <a :href="'https://www.youtube.com/watch?v=' + item.id.videoId"><img
          :src="item.snippet.thumbnails.high.url"
          alt="Smartphone"
          class="rounded-lg"
          width="250"
          height="170"
          style="aspect-ratio: 300 / 200; object-fit: cover;"
        /></a>
        <div class="ml-4">
          <p class="text-lg font-semibold">投稿日：{{ dateJap }}</p>
          <p class="mt-2 text-xl"><a class="underline" :href="'https://www.youtube.com/watch?v=' + item.id.videoId">{{ item.snippet.channelTitle }}</a></p>
          <p class="mt-4 mb-4 text-sm font-medium">チャンネル名:{{ item.snippet.channelTitle }}</p>
          <p>チャンネルID:{{ item.snippet.channelId }}</p>
          <button
            class="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-primary/90 h-10 bg-green-500 text-white px-6 py-2 rounded"
            @click="favoriteAddFunc(item)"
          >
            後で見る
          </button>
        </div>
      </div>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { dateUntilDayJap } from "../lib/dateFns";
import { Video } from "../ts/video";
import { favoriteAdd } from "../api/favorite";
import { useCookiesStore } from '../stores/CookiesStore'
import { useFavoriteStore } from "../stores/favoritesStore";

const cookiesStore = useCookiesStore()
const favoritesStore = useFavoriteStore()


const props = defineProps({
  item: {
    type: Object as () => Video,
    required: true,
  },
});

const dateJap = computed(() => {
  return dateUntilDayJap(props.item.snippet.publishedAt);
});

function conversionVideo(video: Video) {
  return {
    videoId: video.id.videoId,
    title: video.snippet.title,
    thumbnail: video.snippet.thumbnails.high.url,
    channelId: video.snippet.channelId,
    channelTitle: video.snippet.channelTitle,
    publishedAt: video.snippet.publishedAt,
  };
}

const favoriteAddFunc = async (video:Video) => {
  const newVideo = conversionVideo(video);
  await favoriteAdd(cookiesStore.getUsername(), newVideo);
  favoritesStore.pushToFavorites(newVideo);
};

</script>
