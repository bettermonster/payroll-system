<template>
  <a-card title="快捷导航">
    <a-card-grid v-for="item in items" :key="item">
      <span class="flex flex-col items-center">
        <Icon :icon="item.icon" :color="item.color" size="20" />
        <span class="text-md mt-2">{{ item.title }}</span>
      </span>
    </a-card-grid>
  </a-card>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { Icon } from '/@/components/Icon';
  import { quickNavItems } from './data';

  const items = ref(quickNavItems);
</script>

<style scoped></style>
