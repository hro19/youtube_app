<template>
    <h3 class="text-xl text-amber-500 mt-2 mb-2">後で見るリスト</h3>
    <ul>
        <li v-for="item in favorites" :key="item.id">
            {{ item.name }} {{ item.age }}歳
            <el-button type="success" plain @click="eliminateFavo(item.id)">解除</el-button>
        </li>
    </ul>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import { dbFavorites } from "../lib/dexie";

const favorites = ref<any>([]);

const insertFavo = (name: string, age: number) => {
    dbFavorites.insert(name, age);
};

const eliminateFavo = async(id: number) => {
    dbFavorites.eliminate(id);
    favorites.value = await dbFavorites.getsAll();
};

onMounted(async () => {
    favorites.value = await dbFavorites.getsAll();
});


</script>