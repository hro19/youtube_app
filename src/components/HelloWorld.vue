<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserRound,LogOut } from 'lucide-vue-next';
import { useCookies } from '@vueuse/integrations/useCookies'
import UsernameFunc from '../features/usernameFunc';

defineProps<{ msg: string }>()
const headUsername = ref<string>("");
const cookies = useCookies(['ya_username'])
const usernameFunc = new UsernameFunc();

const removeUsername = () => {
  cookies.set('ya_username', "", { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) });
};

cookies.addChangeListener(() => {
  headUsername.value = usernameFunc.usernameOrAnonimace(cookies.get('ya_username'));
})

onMounted(() => {
  headUsername.value = usernameFunc.usernameOrAnonimace(cookies.get('ya_username'));
})

</script>

<template>
  <div class="flex justify-start items-center bg-red-700 py-2 pl-4">
    <h1 class="text-2xl pr-8">{{ msg }}</h1>
    <UserRound color="white" :size="22" />
    <span class="pl-2">{{ headUsername }}</span>
    <div v-if="usernameFunc.isNotNullEmpty(cookies.get('ya_username'))">
      <a href="#" @click.prevent="removeUsername" class="flex items-end ml-4 gap-1 underline">
      <span class="text-xs">ログアウト</span>
      <LogOut :size="14" />
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
