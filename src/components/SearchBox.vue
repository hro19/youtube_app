<template>
  <div class="search_box">
    <input type="text" v-model="query" @keyup.enter="search" />
    <button @click="search">検索</button>

    <ul>
      <li v-for="item in items">
        <img :src="item.snippet.thumbnails.default.url" />
        https://www.youtube.com/watch?v={{ item.id.videoId }}
        <p>{{ item.snippet.title }}</p>
        <p>{{ item.snippet.channelTitle }}</p>
        <p>{{ item.snippet.publishedAt }}</p>
        <p>チャンネルID:{{ item.snippet.channelId }}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import {defineComponent, ref} from 'vue'
import {youtubeApi} from '../api/youtube'

export default defineComponent({
  setup() {
    const query = ref<string>('')
    const items = ref<any[]>([])

    const search = async () => {
      items.value = await youtubeApi.searchVideos(query.value)
    }

    return {
      query,
      items,
      search
    }
  }  
})
</script>

<style scoped>
.search_box {
  margin-top: 20px;
  margin-left: 10px;
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
