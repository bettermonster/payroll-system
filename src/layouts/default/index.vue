<template>
  <ALayout :class="prefixCls">
    <!-- 头部 -->
    <LayoutHeader fixed></LayoutHeader>
    <ALayout :class="layoutClass">
      <!-- 侧边栏 -->
      <LayoutSiderBar></LayoutSiderBar>
      <!-- 右侧内容 -->
      <ALayout :class="`${prefixCls}-main`">
        <!-- 内容标签tab -->
        <LayoutMultipleHeader />
        <!-- 内容主体 -->
        <LayoutContent />
        <!-- 内容底部 -->
      </ALayout>
    </ALayout>
  </ALayout>
  <!-- <router-view></router-view> -->
</template>

<script lang="ts" setup>
  // 组件
  import { computed } from 'vue';
  import LayoutHeader from './header/index.vue';
  import LayoutSiderBar from './sider/index.vue';
  import LayoutMultipleHeader from './header/MultipleHeader.vue';
  import LayoutContent from './content/index.vue';
  // 方法
  import { useDesign } from '/@/hooks/web/useDesign';
  const { prefixCls } = useDesign('default-layout');
  const layoutClass = computed(() => {
    let cls: string[] = ['ant-layout'];
    cls.push('ant-layout-has-sider');
    return cls;
  });
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-default-layout';

  .@{prefix-cls} {
    display: flex;
    width: 100%;
    min-height: 100%;
    background-color: @content-bg;
    flex-direction: column;

    > .ant-layout {
      min-height: 100%;
    }

    &-main {
      width: 100%;
      margin-left: 1px;
    }
  }
</style>
