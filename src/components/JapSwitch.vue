<template>
    <div class="mb-3">
        <h2 class="text-2xl font-bold">日本の動画</h2>
        <el-switch
        v-model="videoStore.isJapMovie"
        active-color="#409EFF"
        inactive-color="#ccc">
        </el-switch>
    </div>
</template>

<script lang="ts" setup>
import { useVideoStore } from "../stores/videoAtom";
const videoStore = useVideoStore();
</script>