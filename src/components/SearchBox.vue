<template>
  <div class="search_box">
    <input
      :value="counterStore.queryWord"
      @input="changeQueryWord"
      @keyup.enter="counterStore.search(counterStore.queryWord)"
      class="text-black mb-3"
      id="query_word"
      placeholder="キーワード"
    />
    <button @click="counterStore.search(counterStore.queryWord)">検索</button>

  </div>
</template>

<script setup lang="ts">
import { useCounterStore } from "../stores/counter";

const counterStore = useCounterStore();
const changeQueryWord = (event: any) => {
  counterStore.queryWord = event.target.value;
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

.search_box button {
  background-color: #aaa;
  padding:5px 10px;
  border-radius: 12px;
}

</style>
