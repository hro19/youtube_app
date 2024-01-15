<template>
    {{ cookiesStore.getUsername() }}
    <h3 class="text-xl mt-2 mb-2 border-t-2 text-green-500 border-t-green-500 py-1">後で見るリスト</h3>
    <ul>
        <li v-for="item in favorites.videos" :key="item.id" class="flex justify-between mb-3">
            <a :href="'https://www.youtube.com/watch?v=' + item.videoId" class="flex justify-between gap-2" target="_blank">
                <img :src="item.thumbnail" width="50" />{{ item.title.slice(0, 20) }}{{ item.title.length > 20 ? '....' : '' }}
            </a>
            <el-button type="success" plain @click="favoriteDelFunc(cookiesStore.getUsername(),item.videoId)" class="ml-2">解除</el-button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { useCookiesStore } from '../stores/CookiesStore'
import { favoriteAll, favoriteDel } from "../api/favorite"

const cookiesStore = useCookiesStore()

const favorites = ref<any>([]);

const favoriteAllFunc = async (username: string) => {
    favorites.value = await favoriteAll(username);
}

const favoriteDelFunc = async (username: string,videoId:string) => {
    await favoriteDel(username,videoId);
    favorites.value = await favoriteAll(username);
}

onMounted(()=>favoriteAllFunc(cookiesStore.getUsername()));

</script>