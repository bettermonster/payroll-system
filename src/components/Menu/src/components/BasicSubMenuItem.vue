<template>
  <!-- 是否有子集,以及菜单是否显示 -->
  <BasciMenuItem v-if="!menuHasChildren(item) && getShowMenu" :item="item"></BasciMenuItem>
  <a-sub-menu v-if="menuHasChildren(item) && getShowMenu" :key="`submenu-${item.path}`">
    <template #title>
      <MenuItemContent :item="item"></MenuItemContent>
    </template>
    <template v-for="chilrenItem in item.children || []" :key="chilrenItem.path">
      <BasicSubMenuItem :item="chilrenItem" />
    </template>
  </a-sub-menu>
</template>

<script setup lang="ts">
  import { ref } from 'vue';
  import { itemProps } from '../props';
  import MenuItemContent from './MenuItemContent.vue';
  const props = defineProps(itemProps);

  const item = ref(props.item);

  const getShowMenu = true;
  function menuHasChildren(menuTreeItem: any): boolean {
    // menuTreeItem.meta?.hideChildrenInMenu &&
    return !!menuTreeItem.children && menuTreeItem.children.length > 0;
  }
</script>
