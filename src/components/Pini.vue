<script setup lang="ts">
import { computed, onMounted } from "vue";
import { useCounterStore } from "../stores/counter";
import SearchBoxItem from "./SearchBoxItem.vue";

const counterStore = useCounterStore();
const videosDesc = computed((): any => {
  return counterStore.videoData;
});

onMounted(() => {
  counterStore.search("vue.js");
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
