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
                        <button class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full" type="button">ログイン</button>
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

const cookies = useCookies(['ya_username'])
const input = ref("");
const showModal = ref(false);

onBeforeMount(() => {
    if (!cookies.get('ya_username')) {
        showModal.value = true;
    }
});



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
