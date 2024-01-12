<template>
<div class="mt-3 mb-32">
    <button @click="videoStore.search(videoStore)">検索</button>
</div>
</template>

<script lang="ts" setup>
import { useVideoStore } from "../stores/videoAtom";

const videoStore = useVideoStore();
</script>

<style scoped>
button {
  display: block;
  width: 100%;
  background-color: #E68925;
  padding:5px 10px;
  border-radius: 12px;
}
</style>