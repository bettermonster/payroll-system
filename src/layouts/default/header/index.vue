<template>
  <ALayoutHeader :class="getHeaderClass">
    <!-- 左侧 -->
    <div :class="`${prefixCls}-left`">
      <!-- logo -->
      <AppLogo :class="`${prefixCls}-logo`"></AppLogo>
    </div>
    <!-- 菜单 -->
    <span class="text-red-400">123</span>
    <!-- 操作 -->
  </ALayoutHeader>
</template>

<script setup lang="ts">
  import { AppLogo } from '/@/components/Application';

  import { computed } from 'vue';
  import { useDesign } from '/@/hooks/web/useDesign';

  const { prefixCls } = useDesign('layout-header');

  const props = defineProps({
    fixed: {
      type: Boolean,
      defuult: undefined,
    },
  });

  const getHeaderClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: props.fixed,
        [`${prefixCls}--light`]: true,
      },
    ];
  });
</script>

<style lang="less">
  @import './index.less';
</style>
