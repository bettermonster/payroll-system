<template>
  <div :class="getAppLogoClass">
    <img src="../../../assets/images/logo.png" />
    <div class="ml-2 truncate md:opacity-100" :class="getTitleClass"> {{ title }} </div>
  </div>
</template>

<script setup lang="ts">
  import { computed } from 'vue';
  import { useGlobSetting } from '/@/hooks/setting';
  import { useDesign } from '/@/hooks/web/useDesign';

  const props = defineProps({
    theme: { type: String },
  });

  const { prefixCls } = useDesign('app-logo');

  const getAppLogoClass = computed(() => [prefixCls, props.theme]);

  const getTitleClass = computed(() => [`${prefixCls}__title`]);

  const { title } = useGlobSetting();
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    display: flex;
    align-items: center;
    cursor: pointer;
    transition: all 0.2s ease;

    &__title {
      font-size: 16px;
      font-weight: 700;
      transition: all 0.5s;
      line-height: normal;
    }
  }
</style>
