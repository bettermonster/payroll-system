<template>
  <div
    style="
      width: 210px;
      overflow: hidden;
      flex: 0 0 210px;
      max-width: 210px;
      min-width: 210px;
      transition: all 0.2s ease 0s;
    "
  >
  </div>
  <ALayoutSider width="210px" :class="getSiderClass">
    <LayoutMenu></LayoutMenu>
  </ALayoutSider>
</template>

<script setup lang="ts">
  import LayoutMenu from '../menu/index.vue';

  import { useDesign } from '/@/hooks/web/useDesign';
  import { computed } from 'vue';

  const { prefixCls } = useDesign('layout-sideBar');
  const getSiderClass = computed(() => {
    return [
      prefixCls,
      {
        [`${prefixCls}--fixed`]: true,
        [`${prefixCls}--mix`]: true,
      },
    ];
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-layout-sideBar';

  .@{prefix-cls} {
    &&--fixed {
      position: fixed;
      top: 0;
      left: 0;
      height: 100%;
    }

    &&--mix {
      top: @header-height;
      height: calc(100% - @header-height);
    }
  }
</style>
