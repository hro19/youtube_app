<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { UserRound,LogOut } from 'lucide-vue-next';
import UsernameFunc from '../features/usernameFunc';
import { useFavoriteStore} from '../stores/favoritesStore'
import { useCookiesStore } from '../stores/CookiesStore'
const cookiesStore = useCookiesStore()

defineProps<{ msg: string }>()
const headUsername = ref<string>("");
const usernameFunc = new UsernameFunc();
const favoriteStore = useFavoriteStore()

cookiesStore.cookies.addChangeListener(() => {
  headUsername.value = usernameFunc.usernameOrAnonimace(cookiesStore.getUsername());
})

onMounted(() => {
  headUsername.value = usernameFunc.usernameOrAnonimace(cookiesStore.getUsername());
})

const resetFavorites = async()=> {  
  await cookiesStore.removeUsername()
  await favoriteStore.$reset()
};

</script>

<template>
  <div class="flex justify-start items-center bg-red-700 py-2 pl-4">
    <h1 class="text-2xl pr-8">{{ msg }}</h1>
    <UserRound color="white" :size="22" />
    <span class="pl-2">{{ headUsername }}</span>
    <div v-if="usernameFunc.isNotNullEmpty(cookiesStore.getUsername())">
      <a href="#" @click.prevent="resetFavorites()" class="flex items-end ml-4 gap-1 underline">
      <span class="text-xs">ログアウト</span>
      <LogOut :size="14" />
      </a>
    </div>
  </div>
</template>

<style scoped>
</style>
