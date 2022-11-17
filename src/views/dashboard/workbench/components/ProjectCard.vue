<template>
  <a-card title="项目" :loading="loading">
    <template #extra>
      <a-button type="link" size="small">更多</a-button>
    </template>
    <a-card-grid v-for="item in items" :key="item" class="md:w-1/3">
      <span class="flex">
        <Icon :icon="item.icon" :color="item.color" size="30"></Icon>
        <span class="text-lg ml-4">{{ item.title }}</span>
      </span>
      <div class="mt-2 h-10 text-secondary">{{ item.desc }}</div>
      <div class="flex justify-between text-secondary">
        <span>{{ item.group }}</span>
        <span>{{ item.date }}</span>
      </div>
    </a-card-grid>
  </a-card>
</template>

<script setup lang="ts">
  import { Icon } from '/@/components/Icon';
  import { ref } from 'vue';
  import { groupItems } from './data';

  defineProps({
    loading: Boolean,
  });

  const items = ref(groupItems);
</script>

<style scoped></style>
