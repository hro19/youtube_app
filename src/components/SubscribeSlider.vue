<template>
    <h1>登録者数</h1>
    <div class="slider-demo-block">
        <el-slider v-model="value" range :marks="marks" :max="60000" />
    </div>
    <div class="mt-8">
        <div class="min_sub">【最小】{{ value[0] }}</div>
        <div class="max_sub">【最大】{{ value[1] }}</div>
    </div>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'
import type { CSSProperties } from 'vue'

interface Mark {
    style: CSSProperties
    label: string
}

type Marks = Record<number, Mark | string>

const value = ref([10, 6000])
const marks = reactive<Marks>({
    0: '0°C',
    20000: '2万',
    40000: '4万',
    60000: {
        style: {
            color: '#1989FA',
        },
        label: '6万',
    },
})
</script>
<style scoped>
.slider-demo-block {
    display: flex;
    align-items: center;
}
.slider-demo-block .el-slider {
    margin-top: 0;
    margin-left: 12px;
}

h1{
        font-size: 24px;
        font-weight: bold;
        margin-bottom: 10px;
}
</style>