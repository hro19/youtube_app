<script setup lang="ts">
import { ref } from 'vue'
import SubscribeSlider from "./SubscribeSlider.vue";
import SearchBox from "./SearchBox.vue";

const queryWord = ref<string>("")

</script>

<template>
    <h1 class="text-2xl font-bold mb-2">クエリ入力</h1>
      <SearchBox :queryWord="queryWord" @update:queryWord="queryWord = $event" />
      <SubscribeSlider />
</template>

<style scoped>
</style>