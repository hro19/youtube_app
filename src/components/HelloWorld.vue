<script setup lang="ts">
import { UserRound } from 'lucide-vue-next';
defineProps<{ msg: string }>()
</script>

<template>
  <div class="flex justify-start items-center bg-red-700 py-2 pl-4">
  <h1 class="text-2xl pr-8">{{ msg }}</h1>
    <UserRound
    color="white"
    :size="22" />
    <span class="pl-2">ログインしておりません</span>
  </div>
</template>

<style scoped>
</style>
