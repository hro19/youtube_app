<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserRound } from 'lucide-vue-next';
import { useCookies } from '@vueuse/integrations/useCookies'
import { usernameOrAnonimace } from '../features/usernameFunc';

defineProps<{ msg: string }>()
const headUsername = ref<string>("");
const cookies = useCookies(['ya_username'])

cookies.addChangeListener(() => {
  headUsername.value = usernameOrAnonimace(cookies.get('ya_username'),"ログインしてください");
})

onMounted(() => {
  headUsername.value = usernameOrAnonimace(cookies.get('ya_username'),"ログインしてください");
})

</script>

<template>
  <div class="flex justify-start items-center bg-red-700 py-2 pl-4">
    <h1 class="text-2xl pr-8">{{ msg }}</h1>
    <UserRound color="white" :size="22" />
    <span class="pl-2">{{ headUsername }}</span>
  </div>
</template>

<style scoped>
</style>
