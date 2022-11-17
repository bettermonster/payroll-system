<template>
  <PageWrapper>
    <template #headerContent> <WorkBenchHeader /> </template>
    <div class="lg:flex">
      <div class="lg:w-8/12 w-full mr-4">
        <!-- 项目 -->
        <ProjectCard :loading="loading" class="enter-x" />
      </div>
      <div class="lg:w-4/12 w-full">
        <!-- 快捷导航 -->
        <QuickNav :loading="loading" class="enter-y"
      /></div>
    </div>
  </PageWrapper>
</template>

<script lang="ts" setup>
  import { ref } from 'vue';
  import ProjectCard from './components/ProjectCard.vue';
  import WorkBenchHeader from './components/WorkBenchHeader.vue';
  import QuickNav from './components/QuickNav.vue';
  import { PageWrapper } from '/@/components/Page';

  const loading = ref(true);
  setTimeout(() => {
    loading.value = false;
  }, 1500);
</script>

<style lang="scss" scoped></style>
