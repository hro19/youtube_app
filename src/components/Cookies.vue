<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['ya_username'])
</script>

<template>
  <div class="text-white">
    <button @click="cookies.set('ya_username', 'ダミアン',{expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),})">
      ダミアン
    </button>
    <br />
    <button @click="cookies.set('ya_username', 'ルーカス',{expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),})">
      ルーカス
    </button>
  </div>
</template>