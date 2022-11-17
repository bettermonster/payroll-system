<template>
  <div :class="prefixCls" class="relative w-full h-full px-4">
    <div class="container relative h-full py-2 mx-auto sm:px-10 sm:mt-10">
      <div class="flex h-full">
        <div class="hidden min-h-full pl-4 mr-4 xl:flex xl:flex-col xl:w-6/12">
          <AppLogo class="-enter-x" />
          <div class="my-auto">
            <img
              src="../../../assets/svg/login-box-bg.svg"
              :alt="title"
              class="w-1/2 -mt-16 -enter-x"
            />
            <div class="mt-5 font-medium text-white -enter-x"
              ><span class="inline-block mt-4 text-3xl">银丰典当后台管理系统</span></div
            >
            <div class="mt-5 font-normal text-white text-md -enter-x">输入您的信息开始使用</div>
          </div>
        </div>
        <div class="flex w-full h-full py-5 xl:h-auto xl:py-0 xl:my-0 xl:w-6/12">
          <div
            :class="`${prefixCls}-form`"
            class="relative w-full bg-slate-200 px-5 py-8 mx-auto my-auto rounded-md shadow-md xl:ml-16 xl:bg-transparent xl:p-4 xl:shadow-none xl:w-auto enter-x"
          >
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { useDesign } from '/@/hooks/web/useDesign';
  import { AppLogo } from '/@/components/Application/index';
  import { computed } from 'vue';
  import { useGlobSetting } from '/@/hooks/setting';
  import LoginForm from './LoginForm.vue';

  const globSetting = useGlobSetting();

  const { prefixCls } = useDesign('login');
  const title = computed(() => globSetting?.title ?? '');
</script>

<style lang="less">
  @prefix-cls: ~'@{namespace}-login'; //转义
  @logo-prefix-cls: ~'@{namespace}-app-logo';

  .@{prefix-cls} {
    min-height: 100%;
    overflow: hidden;

    &::before {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-image: url(/@/assets/svg/login-bg.svg);
      background-position: 100%;
      background-repeat: no-repeat;
      background-size: auto 100%;
      margin-left: -48%;
      content: '';
    }

    .@{logo-prefix-cls} {
      position: absolute;
      top: 12px;
      height: 30px;

      &__title {
        font-size: 14px;
        color: #fff;
      }

      img {
        width: 32px;
      }
    }
    .container {
      .@{logo-prefix-cls} {
        display: flex;
        width: 60%;
        height: 80px;

        &__title {
          font-size: 24px;
          color: #fff;
        }

        img {
          width: 48px;
        }
      }
    }

    input:not([type='checkbox']) {
      min-width: 360px;
    }
  }
</style>
