<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['username'])
</script>

<template>
  <div class="text-white">
    <strong>ユーザーネーム</strong>: {{ cookies.get('username') }}
    <hr>
    <button @click="cookies.set('username', 'ダミアン',{expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),})">
      ダミアン
    </button>
    <br />
    <button @click="cookies.set('username', 'ルーカス',{expires: new Date(Date.now() + (24 * 60 * 60 * 1000)),})">
      ルーカス
    </button>
  </div>
</template>