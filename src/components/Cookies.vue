<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['ya_username'])
cookies.get('ya_username')

cookies.addChangeListener(() => {
        console.log('usernameが変更されました')
}); 
</script>

<template>
    <div class="text-white">
        <button @click="cookies.set('ya_username', 'ダミアン', { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) } as any)">
            ダミアン
        </button>
        <button @click="cookies.set('ya_username', 'ルーカス', { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) } as any)">
            ルーカス
        </button>
    </div>
</template>