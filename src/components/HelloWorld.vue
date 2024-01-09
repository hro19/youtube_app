<script setup lang="ts">
defineProps<{ msg: string }>()
</script>

<template>
  <h1 class="bg-red-700 text-2xl py-2 pl-4">{{ msg }}</h1>
</template>

<style scoped>
</style>
