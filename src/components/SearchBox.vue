<template>
  <div class="search_box">
    <input
      :value="props.queryWord"
      @input="(event: Event) => $emit('update:queryWord', (event.target as HTMLInputElement).value)"
      @keyup.enter="search"
      class="text-black"
    />
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
import { ref, onMounted } from 'vue'
import { youtubeApi } from '../api/youtube';
import SearchBoxItem from './SearchBoxItem.vue';

const props = defineProps({
  queryWord: String
}) 

const items = ref<any[]>([])

const search = async () => {
  if (props.queryWord) {
    items.value = await youtubeApi.searchVideos(props.queryWord);
  }
}

onMounted(search);
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
