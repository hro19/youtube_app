<template>
  <div class="search_box">
    <input type="text" v-model="query" @keyup.enter="search" />
    <button @click="search">検索</button>
    <ul>
      <SearchBoxItem
        v-for="item in items" 
        :key="item.etag"
        :item="item" 
      />
    </ul>
  </div>
</template>

<script setup lang="ts">
import {ref} from 'vue'
import { youtubeApi } from '../api/youtube';
import SearchBoxItem from './SearchBoxItem.vue';

    const query = ref<string>('')
    const items = ref<any[]>([])

    const search = async () => {
      items.value = await youtubeApi.searchVideos(query.value)
    }

</script>

<style scoped>
.search_box {
  margin: 20px 0 15px 10px;
}

.search_box input[type="text"] {
  margin-right: 10px;
  color: #111;
  font-size: 1.3rem;
}

.search_box button {
  background-color: #aaa;
  padding:5px 10px;
  border-radius: 12px;
}

</style>
