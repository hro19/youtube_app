<script setup lang="ts">
import { onMounted, ref } from 'vue';
import { UserRound } from 'lucide-vue-next';
import { useCookies } from '@vueuse/integrations/useCookies'

defineProps<{ msg: string }>()
const cookies = useCookies(['ya_username'])
const isUsername = ref(false);

onMounted(() => {
  if (cookies.get('ya_username') && cookies.get('ya_username').trim() !== '') {
    isUsername.value = true;
  }
});
</script>

<template>
  <div class="flex justify-start items-center bg-red-700 py-2 pl-4">
    <h1 class="text-2xl pr-8">{{ msg }}</h1>
    <UserRound color="white" :size="22" />
    <span v-if="isUsername" class="pl-2">{{ cookies.get('ya_username') }}</span>
    <span v-else class="pl-2">ログインしておりません</span>
  </div>
</template>

<style scoped>
</style>
