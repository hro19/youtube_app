<script setup lang="ts">
import { ref } from 'vue'
import SubscribeSlider from "./SubscribeSlider.vue";
import SearchBox from "./SearchBox.vue";
import { youtubeApi } from '../api/youtube';
import { Video } from "../ts/video";

const queryWord = ref<string>("犬")
const items = ref<Video[] | null>(null)

const search = async () => {
  if (queryWord) {
    items.value = await youtubeApi.searchVideos(queryWord.value);
  }
}

const changeQueryWord = (word: string) => {
  queryWord.value = word;
}

</script>

<template>
    <h1 class="text-2xl font-bold mb-2">クエリ入力</h1>
      <SearchBox 
      :queryWord="queryWord" 
      :items="items" 
      @search="search" 
      @changeQueryWord="changeQueryWord" />
      <SubscribeSlider />
</template>

<style scoped>
</style>