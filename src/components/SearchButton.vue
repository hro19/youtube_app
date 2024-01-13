<template>
<div class="button-box">
    <button @click="videoStore.search(videoStore)">検索</button>
</div>
</template>

<script lang="ts" setup>
import { useVideoStore } from "../stores/videoAtom";

const videoStore = useVideoStore();
</script>

<style scoped>
.button-box{
  display: flex;
  justify-content: flex-end;
  margin-top: 10px;
  margin-bottom: 110px ;
}

button {
  display: block;
  width: 120px;
  background-color: #E68925;
  padding:5px 10px;
  border-radius: 12px;
}
</style>