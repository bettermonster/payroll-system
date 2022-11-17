<script lang="tsx">
  import { defineComponent, unref, computed, ref, watch } from 'vue';
  import { useGo } from '/@/hooks/web/usePage';
  // 组件
  import { BasicMenu } from '/@/components/Menu';
  import { useSplitMenu } from './useLayoutMenu';

  export default defineComponent({
    setup() {
      const back = [
        {
          title: 'dashboard',
          hideChildrenInMenu: true,
          icon: 'bx:bx-home',
          meta: {
            title: 'routes.dashboard.dashboard',
            hideChildrenInMenu: true,
            icon: 'bx:bx-home',
          },
          name: 'dashboard',
          hideMenu: false,
          path: '/dashboard',
          redirect: '/dashboard/analysis',
          children: [
            {
              hideMenu: true,
              hideBreadcrumb: true,
              title: 'routes.dashboard.analysis',
              currentActiveMenu: '/dashboard',
              icon: 'bx:bx-home',
              meta: {
                hideMenu: true,
                hideBreadcrumb: true,
                title: 'routes.dashboard.analysis',
                currentActiveMenu: '/dashboard',
                icon: 'bx:bx-home',
              },
              name: 'analysis',
              path: '/dashboard/analysis',
            },
            {
              hideMenu: true,
              hideBreadcrumb: true,
              title: 'routes.dashboard.workbench',
              currentActiveMenu: '/dashboard',
              icon: 'bx:bx-home',
              meta: {
                hideMenu: true,
                hideBreadcrumb: true,
                title: 'routes.dashboard.workbench',
                currentActiveMenu: '/dashboard',
                icon: 'bx:bx-home',
              },
              name: 'workbench',
              path: '/dashboard/workbench',
            },
          ],
        },
      ];

      const go = useGo();

      const { menusRef } = useSplitMenu();

      const getCommonProps = computed(() => {
        const menus = unref(menusRef);
        // 这里不能用@ 因为是tsx语法了
        return {
          menus: menus,
          onMenuClick: handleMenuClick,
        };
      });

      /**
       *
       * @param path
       */
      function handleMenuClick(path: string) {
        // 跳转path
        // console.log('跳转path' + path);
        go(path);
      }

      function renderMenu() {
        // 获取默认的一些自定义时间
        const { menus, ...menuProps } = unref(getCommonProps);
        if (!menus || !menus.length) return null;
        return <BasicMenu {...menuProps} items={menus} />;
      }

      return () => {
        return <>{renderMenu()}</>;
      };
    },
  });
</script>

<style lang="less"></style>
