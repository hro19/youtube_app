<template>
    <ul v-if="props.items">
      <SearchBoxItem
        v-for="item in items" 
        :key="item.id.videoId"
        :item="item" 
      />
    </ul>
    <p v-else>表示できるデータがありません</p>
</template>

<script lang="ts" setup>
import SearchBoxItem from './SearchBoxItem.vue';
import { Video } from "../ts/video";
import { defineProps, PropType } from 'vue';

const props = defineProps({
  queryWord: String,
  items: {
    type: Array as PropType<Video[] | null>,
  },
});
</script>

<style scoped>

</style>