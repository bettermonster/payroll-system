<template>
  <!-- 一：使用svg -->
  <span v-if="isSvgIcon">svgICon</span>
  <!-- 二： 使用Iconfy -->
  <span
    v-else
    :style="getWrapStyle"
    :class="[$attrs.class, 'app-iconify anticon', spin && 'app-iconify-spin']"
  >
    <span class="iconify" :data-icon="props.icon" />
  </span>
</template>

<script setup lang="ts">
  import { computed, CSSProperties, PropType } from 'vue';
  import { propTypes } from '/@/utils/propTypes';
  import '@purge-icons/generated';
  import { isString } from '/@/utils/is';

  const SVG_END_WITH_FLAG = '|svg';

  const props = defineProps({
    // icon name
    icon: propTypes.string,
    color: propTypes.string,
    size: {
      type: [Number, String] as PropType<number | string>,
      default: 16,
    },
    spin: propTypes.bool.def(false),
    prefix: propTypes.string.def(''),
  });
  const isSvgIcon = computed(() => props.icon?.endsWith(SVG_END_WITH_FLAG));

  const getWrapStyle = computed((): CSSProperties => {
    const { size, color } = props;
    let fs = size;
    if (isString(size)) {
      fs = parseInt(size);
    }
    return {
      fontSize: `${fs}px`,
      color: color,
      display: 'inline-block',
    };
  });
</script>

<style lang="less">
  .app-iconify {
    display: inline-block;

    &-spin {
      svg {
        animation: loadingCircle 1s infinite linear;
      }
    }
  }

  span.iconify {
    display: block;
    min-width: 1em;
    min-height: 1em;
    background-color: @iconify-bg-color;
    border-radius: 100%;
  }
</style>
