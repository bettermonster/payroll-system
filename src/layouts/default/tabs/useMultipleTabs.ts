import { ref, toRaw } from 'vue';
import { RouteLocationNormalized } from 'vue-router';

// import { useMultipleTabStore } from '/@/store/modules/multipleTab';
import { useRouter } from 'vue-router';

export function initAffixTabs(): string[] {
  const affixList = ref<RouteLocationNormalized[]>([]);

  //   const tabStore = useMultipleTabStore();
  const router = useRouter();

  function filterAffixTabs(routes: RouteLocationNormalized[]) {
    const tabs: RouteLocationNormalized[] = [];
    routes &&
      routes.forEach((route) => {
        if (route.meta && route.meta.affix) {
          tabs.push(toRaw(route));
        }
      });
    return tabs;
  }

  function addAffixTabs(): void {
    console.log('33333', router.getRoutes());
    const affixTabs = filterAffixTabs(router.getRoutes() as unknown as RouteLocationNormalized[]);
    console.log('2222222', affixList.value);
    affixList.value = affixTabs;
  }

  let isAddAffix = false;
  if (!isAddAffix) {
    addAffixTabs();
    isAddAffix = true;
  }

  console.log(affixList.value);
  return [';;;'];
}
