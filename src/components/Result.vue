<template>
    <ul v-if="videoStore.videoDesc">
      <div id="results">
        <SearchBoxItem
          v-for="item in videoStore.videoDesc" 
          :key="item.id.videoId"
          :item="item" 
        />
      </div>
    </ul>
    <p v-else>表示できるデータがありません</p>
</template>

<script lang="ts" setup>
import { useVideoStore } from "../stores/videoAtom";
import SearchBoxItem from './SearchBoxItem.vue';

const videoStore = useVideoStore();
</script>

<style scoped>
</style>