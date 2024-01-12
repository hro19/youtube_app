<script lang="ts">
import { defineComponent } from 'vue'
import { useCookies } from '@vueuse/integrations/useCookies'

export default defineComponent({
  setup() {
    const cookies = useCookies(['username'])
    return {
      cookies,
    }
  },
})
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