<script setup lang="ts">
import { ref } from 'vue'
import SubscribeSlider from "./SubscribeSlider.vue";

const keyword = ref<string>('')

const handleInput = (event:any) => {
    keyword.value = event.target.value
}
</script>

<template>
    <h1>クエリ入力</h1>
    <div class="">
        <input type="text" id="keyword" v-model="keyword" @input="handleInput" placeholder="キーワード">
        <p class="pt-2">{{ keyword }}</p>
    </div>
    <SubscribeSlider />
</template>

<style scoped>
h1 {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 10px;
}

#keyword {
    width: 100%;
    height: 40px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 16px;
    color: #333;
}
</style>