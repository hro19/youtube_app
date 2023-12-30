<template>
  <li>
    <img :src="item.snippet.thumbnails.default.url">
    
    <div>
        <p><a class="underline" target="_blank" :href="'https://www.youtube.com/watch?v=' + item.id.videoId">{{ item.snippet.title }}</a></p>
        <p>投稿日：{{ dateUntilDayJap(item.snippet.publishedAt) }}</p>
        <p>チャンネル名:{{ item.snippet.channelTitle }}</p>
        <p>チャンネルID:{{ item.snippet.channelId }}</p>
    </div>
  </li>
</template>

<script setup lang="ts">
import { dateUntilDayJap } from '../lib/dateFns'; 

defineProps({
  item: { 
    type: Object,
    required: true
  }  
})
</script>