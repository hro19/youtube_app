<template>
    <ul v-if="videoStore.videoDesc">
      <SearchBoxItem
        v-for="item in videoStore.videoDesc" 
        :key="item.id.videoId"
        :item="item" 
      />
    </ul>
    <p v-else>表示できるデータがありません</p>
</template>

<script lang="ts" setup>
import { onMounted } from "vue";
import { useVideoStore } from "../stores/videoAtom";
import SearchBoxItem from './SearchBoxItem.vue';

const videoStore = useVideoStore();

onMounted(() => {
  videoStore.search(videoStore.queryWord);
});
</script>

<style scoped>

</style>../stores/video