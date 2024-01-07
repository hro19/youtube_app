<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useVideoStore } from "../stores/videoAtom";
import SearchBoxItem from "./SearchBoxItem.vue";

const videoStore = useVideoStore();
const videosDesc = computed((): any => {
  return videoStore.videoData;
});

onMounted(() => {
  videoStore.search("vue.js");
});
</script>

<template>
  <div class="text-white">
    <h2>piniaでの表示</h2>
    <ul v-if="videosDesc">
      <SearchBoxItem v-for="video in videosDesc" :key="video.id.videoId" :item="video" />
    </ul>
  </div>
</template>
../stores/video