<template>
    <ul v-if="videosDesc">
      <SearchBoxItem
        v-for="item in videosDesc" 
        :key="item.id.videoId"
        :item="item" 
      />
    </ul>
    <p v-else>表示できるデータがありません</p>
</template>

<script lang="ts" setup>
import { computed, onMounted } from "vue";
import { useVideoStore } from "../stores/videoAtom";
import SearchBoxItem from './SearchBoxItem.vue';
import { Video } from "../ts/video";

const videoStore = useVideoStore();
const videosDesc = computed((): Video[]|null => {
  return videoStore.videoData;
});

onMounted(() => {
  videoStore.search(videoStore.queryWord);
});
</script>

<style scoped>

</style>../stores/video