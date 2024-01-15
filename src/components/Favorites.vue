<template>
  <h3 class="text-xl mt-2 mb-2 border-t-2 text-green-500 border-t-green-500 py-1">
    後で見るリスト
  </h3>
  <ul>
    <li
      v-for="item in favoritesStore.favorites"
      :key="item.videoId"
      class="flex justify-between mb-3"
    >
      <a
        :href="'https://www.youtube.com/watch?v=' + item.videoId"
        class="flex justify-between gap-2"
        target="_blank"
      >
        <img :src="item.thumbnail" width="50" />{{ item.title.slice(0, 20)
        }}{{ item.title.length > 20 ? "...." : "" }}
      </a>
      <el-button
        type="success"
        plain
        @click="favoriteDelFunc(cookiesStore.getUsername(), item.videoId)"
        class="ml-2"
        >解除</el-button
      >
    </li>
  </ul>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { favoriteAll, favoriteDel } from "../api/favorite";
import { useCookiesStore } from "../stores/CookiesStore";
import { useFavoriteStore } from "../stores/favoritesStore";

const cookiesStore = useCookiesStore();
const favoritesStore = useFavoriteStore();

const favoriteAllFunc = async (username: string) => {
  const { videos, success } = await favoriteAll(username);
  if (success) {
    await favoritesStore.setFavorites(videos);
  } else {
    await favoritesStore.setFavorites([]);
  }
};

onMounted(async () => {
  await favoriteAllFunc(cookiesStore.getUsername());
  // console.log(favoritesStore.favorites);
});

const favoriteDelFunc = async (username: string, videoId: string) => {
  await favoriteDel(username, videoId);
  const { videos } = await favoriteAll(username);
  favoritesStore.setFavorites(videos);
};
</script>
