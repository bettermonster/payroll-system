<script lang="ts">
  import { defineComponent, toRefs } from 'vue';
  import { creatAppProviderContext } from './useAppContext';
  import { prefixCls } from '/@/settings/designSetting';
  const props = {
    // class前缀
    prefixCls: {
      type: String,
      default: prefixCls,
    },
  };
  export default defineComponent({
    name: 'AppProvider',
    inheritAttrs: false,
    props,
    setup(props, { slots }) {
      const { prefixCls } = toRefs(props);
      //   将变量注入到全局
      creatAppProviderContext({ prefixCls });
      return () => slots.default?.();
    },
  });
</script>

<style scoped></style>
