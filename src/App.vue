<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Result from "./components/Result.vue";
import SubscribeSlider from "./components/SubscribeSlider.vue";
import SearchBox from "./components/SearchBox.vue";
import Favorites from "./components/Favorites.vue";
import SearchButton from "./components/SearchButton.vue";

import { useVideoStore } from "./stores/videoAtom";

const videoStore = useVideoStore();

</script>

<template>
  <div class="wrapper">
    <div class="side">
      <h1 class="text-2xl font-bold mb-2">クエリ入力</h1>
      <SearchBox />
      <SubscribeSlider />
      <SearchButton />
      <Favorites />
    </div>
    <div class="main_contante">

      <HelloWorld msg="YouTubeアプリ" />
      <Result :items="videoStore.videoData" />
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