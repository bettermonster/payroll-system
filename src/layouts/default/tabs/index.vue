<template>
  <div :class="getWrapClass">
    <a-tabs
      type="editable-card"
      size="small"
      :animated="false"
      :hide-add="true"
      :tabBarGutter="3"
      @change="handleChange"
      :activeKey="activeKeyRef"
    >
      <template v-for="item in getTabsState" :key="item.query ? item.fullPath : item.path">
        <a-tab-pane :closable="false">
          <template #tab> <TabContent :tabItem="item" /> </template>
        </a-tab-pane>
      </template>
      <template #rightExtra> asdfasdf </template>
    </a-tabs>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { computed, ref, unref } from 'vue';

  import TabContent from './components/TabContent.vue';

  import { useGo } from '/@/hooks/web/usePage';

  import { useMultipleTabStore } from '/@/store/modules/multipleTab';

  import { initAffixTabs } from './useMultipleTabs';

  import { listenerRouteChange } from '/@/logics/mitt/routeChange';
  import { useUserStore } from '/@/store/modules/user';

  // 初始化
  const affixTextList = initAffixTabs();
  const activeKeyRef = ref('');
  console.log(affixTextList);

  // 数据
  const tabStore = useMultipleTabStore();
  const userStore = useUserStore();

  const go = useGo();

  const { prefixCls } = useDesign('multiple-tabs');

  const getWrapClass = computed(() => {
    return [prefixCls];
  });

  listenerRouteChange((route) => {
    const { name, fullPath, path } = route;

    if (name === 'Redirect' || !route || !userStore.getToken) {
      return;
    }

    const p = fullPath || path;
    activeKeyRef.value = p;

    tabStore.addTab(unref(route));
  });

  //获取TabsState
  const getTabsState = computed(() => {
    return tabStore.getTabList;
  });

  function handleChange(activeKey: any) {
    activeKeyRef.value = activeKey;
    go(activeKey);
  }
</script>

<style lang="less">
  @import './index.less';
</style>
