<template>
  <div class="lg:flex">
    <a-avatar :size="72" :src="headerImg" class="!block !mx-auto"></a-avatar>
    <div class="md:ml-6 flex flex-col justify-center md:mt-0 mt-4">
      <h1 class="md:text-lg text-base">早安，***，开始您一天的工作吧！</h1>
      <span class="text-secondary">今日晴，，20℃ - 32℃！ </span>
    </div>
    <div class="flex-1 flex justify-end mt-4">
      <div class="flex flex-col justify-center text-right">
        <span class="text-secondary">代办</span>
        <span class="text-2xl">2/10</span>
      </div>
      <div class="flex flex-col justify-center text-right mx-12">
        <span class="text-secondary">项目</span>
        <span class="text-2xl">8</span>
      </div>
      <div class="flex flex-col justify-center text-right mx-4">
        <span class="text-secondary">团队</span>
        <span class="text-2xl">300</span>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import headerImg from '/@/assets/images/header.jpg';
</script>

<style></style>
