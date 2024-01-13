<script lang="ts" setup>
import { useCookies } from '@vueuse/integrations/useCookies'

const cookies = useCookies(['ya_username'])

//値をセットする
const setUsername = (name: string) => {
    cookies.set('ya_username', name, { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) } as any)
}

//値を取得する
const getUsername = () => {
    return cookies.get('ya_username')
}

//ya_username
const observerUsername = () => {
    cookies.addChangeListener(() => {
        console.log(`${getUsername()}に変更されました`)
    })
}
observerUsername();

</script>

<template>
    <div class="text-white">
        <button @click="setUsername('ダミアン')">
            ダミアン
        </button>
        <button @click="setUsername('ルーカス')">
            ルーカス
        </button>
        <p>{{ getUsername() }}</p>
    </div>
</template>