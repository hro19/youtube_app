<template>
  <li>
    <img :src="item.snippet.thumbnails.default.url" />

    <div>
      <p>
        <a
          class="underline"
          target="_blank"
          :href="'https://www.youtube.com/watch?v=' + item.id.videoId"
          >{{ item.snippet.title }}</a
        >
      </p>
      <p>投稿日：{{ dateJap }}</p>
      <p>チャンネル名:{{ item.snippet.channelTitle }}</p>
      <p>チャンネルID:{{ item.snippet.channelId }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { dateUntilDayJap } from "../lib/dateFns";

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const dateJap = computed(() => {
  return dateUntilDayJap(props.item.snippet.publishedAt);
});
</script>
