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
import { useVideoStore } from "../stores/videoAtom";
import SearchBoxItem from './SearchBoxItem.vue';

const videoStore = useVideoStore();
</script>

<style scoped>

</style>../stores/video