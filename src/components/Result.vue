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
import { useCounterStore } from "../stores/counter";
import SearchBoxItem from './SearchBoxItem.vue';
import { Video } from "../ts/video";

const counterStore = useCounterStore();
const videosDesc = computed((): Video[]|null => {
  return counterStore.videoData;
});

onMounted(() => {
  counterStore.search(counterStore.queryWord);
});
</script>

<style scoped>

</style>