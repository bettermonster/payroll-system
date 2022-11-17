import { defineStore } from 'pinia';
import { RouteLocationNormalized } from 'vue-router';

// import { store } from '/@/store';

interface MultipleTabState {
  tabList: RouteLocationNormalized[];
}

export const useMultipleTabStore = defineStore({
  id: 'app-multiple-tab',
  state: (): MultipleTabState => ({
    tabList: [],
  }),
  getters: {
    getTabList(): RouteLocationNormalized[] {
      return this.tabList;
    },
  },
  actions: {
    addTab(route: RouteLocationNormalized) {
      const { fullPath, path, params, query } = route;
      // 已经存才，不重复添加
      let updateIndex = -1;
      const tabHasExits = this.tabList.some((tab, index) => {
        updateIndex = index;
        return (tab.fullPath || tab.path) === (fullPath || path);
      });
      // if the tab alreadly exists, preform the update operation
      if (tabHasExits) {
        const curTab = this.tabList[updateIndex];
        if (!curTab) return;
        // 这里是为了防止 有新变化吗？？？
        curTab.params = params || curTab.params;
        curTab.query = query || curTab.query;
        curTab.fullPath = fullPath || curTab.fullPath;
        this.tabList.splice(updateIndex, 1, curTab);
      } else {
        // add tab
        this.tabList.push(route);
      }
    },
  },
});
