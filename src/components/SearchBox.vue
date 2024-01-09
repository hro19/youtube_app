<template>
  <div class="search_box">
    <input
      :value="videoStore.queryWord"
      @input="changeQueryWord"
      @keyup.enter="videoStore.search(videoStore.queryWord)"
      class="text-black mb-3"
      id="query_word"
      placeholder="キーワード"
    />

  </div>
</template>

<script setup lang="ts">
import { useVideoStore } from "../stores/videoAtom";

const videoStore = useVideoStore();
const changeQueryWord = (event: Event) => {
  const target = event.target as HTMLInputElement;
  videoStore.queryWord = target.value;
}
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
</style>