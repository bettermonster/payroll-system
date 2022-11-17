<template>
  <a-menu
    v-model:openKeys="openKeys"
    v-model:selectedKeys="selectedKeys"
    mode="inline"
    theme="dark"
    :subMenuOpenDelay="0.2"
    @click="handleMenuClick"
  >
    <template v-for="item in items" :key="item.key">
      <BasicSubMenuItem :item="item"></BasicSubMenuItem>
    </template>
  </a-menu>
</template>

<script setup lang="ts">
  import BasicSubMenuItem from './components/BasicSubMenuItem.vue';
  import { ref, toRefs } from 'vue';
  import { basicProps } from './props';

  const props = defineProps(basicProps);
  const emit = defineEmits(['menuClick']);
  const openKeys = ref([]);
  const selectedKeys = ref([]);
  const { items } = toRefs(props);

  // 菜单点击事件
  function handleMenuClick({ item, key }: { item: any; key: string }) {
    console.log(item);
    // console.log(key);
    // console.log(props);

    emit('menuClick', key);
  }
</script>

<style scoped></style>
