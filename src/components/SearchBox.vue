<template>
  <div class="search_box">
    <input
      :value="props.queryWord"
      @input="(event: Event) => event.target && $emit('update:queryWord', (event.target as HTMLInputElement).value)"
      @keyup.enter="search"
      class="text-black mb-3"
      id="query_word"
      placeholder="キーワード"
    />
    <button @click="search">検索</button>
    <ul v-if="items">
      <SearchBoxItem
        v-for="item in items" 
        :key="item.id.videoId"
        :item="item" 
      />
    </ul>
    <p v-else>表示できるデータがありません</p>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { youtubeApi } from '../api/youtube';
import SearchBoxItem from './SearchBoxItem.vue';
import { Video } from "../ts/video";

const props = defineProps({
  queryWord: String
}) 

const items = ref<Video[] | null>(null)

const search = async () => {
  if (props.queryWord) {
    items.value = await youtubeApi.searchVideos(props.queryWord);
  }
}

onMounted(search);
</script>

<style scoped>
#query_word {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    color: #333;
}
.search_box {
  margin-bottom: 20px;
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
