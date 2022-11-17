<template>
  <div>
    <span class="ml-1">{{ getTitle }}</span></div
  >
</template>

<script setup lang="ts">
  import { defineProps, PropType, computed } from 'vue';
  import { RouteLocationNormalized } from 'vue-router';

  const props = defineProps({
    tabItem: {
      type: Object as PropType<RouteLocationNormalized>,
      default: null,
    },
  });

  const getTitle = computed(() => {
    const { tabItem: { meta } = {} } = props;
    return meta && (meta.title as string);
  });
</script>

<style scoped></style>
