<script setup lang="ts">
import { ref } from 'vue'

import HelloWorld from "./components/HelloWorld.vue";
import Result from "./components/Result.vue";

import SubscribeSlider from "./components/SubscribeSlider.vue";
import SearchBox from "./components/SearchBox.vue";
import { youtubeApi } from './api/youtube';
import { Video } from "./ts/video";

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
  <div class="wrapper">
    <div class="side">
      <h1 class="text-2xl font-bold mb-2">クエリ入力</h1>
      <SearchBox 
      :queryWord="queryWord" 
      :items="items" 
      @search="search" 
      @changeQueryWord="changeQueryWord" />
      <SubscribeSlider />
    </div>
    <div class="main_contante">
      <HelloWorld msg="YouTubeアプリ" />
      <Result :items="items" />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.wrapper .side{
  min-width: 240px;
  padding: 30px 15px;
  background-color: #374151;
    color: #fff;
}

.wrapper .main_contante{
  width: 100%;
  min-height: 100vh;
  color: #fff;
}

</style>
