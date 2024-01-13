<template>
    <div>
        <!-- <button type="button" class="btn btn-primary" @click="showModal = true">Open modal</button> -->
        <Modal v-model="showModal" title="ユーザーネーム" wrapper-class="modal-wrapper">
            <div class="mb-3">
                <el-input placeholder="ユーザーネームを入力ください" v-model="input"></el-input>
            </div>
            <div class="row">
                <div class="col-sm-12">
                    <div class="flex justify-end gap-2">
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" type="button" @click="loginUsername(input)">ログイン</button>
                        <button class="bg-gray-500 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded-full" type="button" @click="showModal = false">Close</button>
                    </div>
                </div>
            </div>
        </Modal>
    </div>
</template>

<script setup lang="ts">
import { ref, onBeforeMount } from "vue";
import { Modal } from "@kouts/vue-modal";
import '@kouts/vue-modal/dist/vue-modal.css'
import { useCookies } from '@vueuse/integrations/useCookies'
import UsernameFunc from '../features/usernameFunc';

const cookies = useCookies(['ya_username'])
const input = ref("");
const showModal = ref(false);
const usernameFunc = new UsernameFunc();

onBeforeMount(() => {
    if (!cookies.get('ya_username')) {
        showModal.value = true;
    }
});

//監視してログインしていない場合はモーダルを表示する
cookies.addChangeListener(async() => {
    const flag = await cookies.get('ya_username')
    if(!usernameFunc.isNotNullEmpty(flag)){
        showModal.value = true;
  }
})

//ログインしてモーダルを非表示する
const loginUsername = async (name: string) => {
    await cookies.set('ya_username', name, { expires: new Date(Date.now() + (24 * 60 * 60 * 1000)) } as any)
    if (cookies.get('ya_username')) {
        showModal.value = false;
    }
}

</script>

<style>
.modal-wrapper {
  display: flex;
  align-items: center;
}
.modal-wrapper .vm {
  top: auto;
}
</style>
