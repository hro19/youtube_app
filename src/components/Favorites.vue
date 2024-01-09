<template>
    <h3 class="text-xl mt-2 mb-2 border-t-2 text-green-500 border-t-green-500 py-2">後で見るリスト</h3>
    <ul>
        <li v-for="item in favorites" :key="item.id"><a :href="'https://www.youtube.com/watch?v=' + item.videoId" target="_blank"><img :src="item.thumbnail" width="90" />【{{ item.videoId }}】{{ item.title }}</a>
            <el-button type="success" plain @click="eliminateFavo(item.id)">解除</el-button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { dbFavorites } from "../lib/dexie";

const favorites = ref<any>([]);

const eliminateFavo = async(id: number) => {
    dbFavorites.eliminate(id);
    favorites.value = await dbFavorites.getsAll();
};

onMounted(async () => {
    favorites.value = await dbFavorites.getsAll();
});


</script>