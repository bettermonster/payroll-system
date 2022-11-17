<template>
  <span class="flex items-center">
    <home-outlined class="mr-2" />
    {{ getName }}
  </span>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { contentProps } from '../props';
  import { HomeOutlined } from '@ant-design/icons-vue';
  const props = defineProps(contentProps);

  const getName = computed(() => props.item?.name);
  // const getIcon = computed(() => props.item.icon);
</script>

<style scoped></style>
