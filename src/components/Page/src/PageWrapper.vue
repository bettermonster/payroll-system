<template>
  <div :class="getClass">
    <!-- header 或者自定义的 header -->
    <a-page-header :ghost="false">
      <template #default>
        <slot name="headerContent"></slot>
      </template>
    </a-page-header>
    <!-- content -->
    <div class="overflow-hidden" :class="getContentClass">
      <slot></slot>
    </div>

    <!-- footer -->
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('page-wrapper');

  const getClass = computed(() => {
    return [prefixCls];
  });

  const getContentClass = computed(() => {
    return [`${prefixCls}-content`];
  });
</script>

<style scoped lang="less">
  @prefix-cls: ~'@{namespace}-page-wrapper';

  .@{prefix-cls} {
    position: relative;

    .@{prefix-cls}-content{
      margin: 16px;
    }
  }
</style>
