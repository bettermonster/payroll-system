<template>
  <LoginFormTitle class="enter-x" />
  <a-form ref="formRef" class="p-4 enter-x" :model="formState" :rules="getFormRules">
    <a-form-item name="username" class="enter-x">
      <a-input size="large" v-model:value="formState.username" placeholder="请输入账号" />
    </a-form-item>
    <a-form-item name="password" class="enter-x">
      <a-input-password size="large" v-model:value="formState.password" placeholder="请输入密码" />
    </a-form-item>

    <a-form-item name="imageCode" class="enter-x">
      <a-input-group size="large">
        <a-row :gutter="0">
          <a-col :span="24">
            <a-input v-model:value="formState.imageCode" placeholder="验证码">
              <template #addonAfter>
                <div style="width: 80px">
                  <img
                    :src="formState.imageCodePicture"
                    alt="点击刷新"
                    title="验证码"
                    class="cursor-pointer"
                    @click="freshImageCodeFn"
                  />
                </div>
              </template>
            </a-input>
          </a-col>
        </a-row>
      </a-input-group>
    </a-form-item>

    <a-form-item class="enter-x">
      <a-button type="primary" size="large" block @click="handleLogin" :loading="loading"
        >Submit</a-button
      >
    </a-form-item>
  </a-form>
</template>

<script setup lang="ts">
  import { onMounted, reactive, ref } from 'vue';
  import LoginFormTitle from './LoginFormTitle.vue';
  import { useFormRules, useFormValid } from './useLogin';
  import { buildUUID } from '/@/utils/uuid';
  import { cacheCipher } from '/@/settings/encryptionSetting';

  import { getVerifyCodeImages } from '/@/api/sys/user';

  import { useUserStore } from '/@/store/modules/user';
  import { RasEncryption } from '/@/utils/cipher';

  const userStore = useUserStore();

  const formRef = ref();

  const formState = reactive({
    username: 'jialuwei',
    password: '123456',
    imageCode: undefined,
    imageCodePicture: '',
    clientId: buildUUID() + Date.parse(new Date() as unknown as string),
    sysLogicId: '',
  });

  // 生命周期
  onMounted(() => {
    freshImageCodeFn();
  });

  const { validForm } = useFormValid(formRef);

  // 按钮加载状态
  const loading = ref(false);

  const { getFormRules } = useFormRules();

  async function handleLogin() {
    const data = await validForm();
    if (!data) return;
    try {
      // 请求登录
      loading.value = true;
      // 校验验证码
      getVerifyCodeImages({
        clientId: formState.clientId,
        imageCode: formState.imageCode,
      }).then(async (responese) => {
        if (!responese) {
          loading.value = false;
          // 生成新的图形验证码
          freshImageCodeFn();
        } else {
          // 登录

          var encodePwd = new RasEncryption({ key: cacheCipher.getRSAPublicKey }).encrypt(
            data.password,
          );
          const userInfo = await userStore.login({
            username: data.username,
            password: encodePwd,
            imageCode: data.imgeCode,
            clientId: formState.clientId,
            grant_type: 'password',
            passwordType: '2',
            sysId: formState.sysLogicId,
            mode: 'none', // 不要错误的提示
          });
          loading.value = false;
          console.log(userInfo);
        }
      });
    } catch (error) {
      console.log('请求失败');
    } finally {
      console.log('finally');
    }
  }

  function freshImageCodeFn() {
    formState.imageCodePicture =
      '/basic-api/yusp-uaa/api/codeImage/' + formState.clientId + '?t=' + new Date().getTime();
    formState.imageCode = undefined;
    return formState.imageCodePicture;
  }
</script>

<style scoped></style>
