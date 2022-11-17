<template>
  <a-menu-item :key="item.path">
    <MenuItemContent :item="item"></MenuItemContent>
  </a-menu-item>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { itemProps } from '../props';
  const props = defineProps(itemProps);

  const item = ref(props.item);
</script>

<style scoped></style>
