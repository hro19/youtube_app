<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import Side from "./components/Side.vue";
import Result from "./components/Result.vue";
import SearchBox from "./components/SearchBox.vue";
</script>

<template>
  <div class="wrapper">
    <div class="side">
      <Side />
    </div>
    <div class="main_contante">
      <HelloWorld msg="YouTubeアプリ" />
      <Result />
      <SearchBox />
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  display: flex;
}

.wrapper .side{
  min-width: 240px;
  padding: 30px 15px;
  background-color: #374151;
    color: #fff;
}

.wrapper .main_contante{
  width: 100%;
  color: #fff;
}

</style>
