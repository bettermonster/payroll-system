import { computed, Ref, unref } from 'vue';

export function useFormRules() {
  const getAccountFormRule = createRule('账户错误');
  const getPasswordFormRule = createRule('密码错误');

  const getFormRules = computed(() => {
    const accountFormRule = getAccountFormRule;
    const passwordFormRule = getPasswordFormRule;
    return {
      account: accountFormRule,
      password: passwordFormRule,
    };
  });

  return { getFormRules };
}

export function useFormValid(formRef: Ref<any>) {
  async function validForm() {
    const form = unref(formRef);
    if (!form) return;
    const data = await form.validate();
    console.log(data);
    return data;
  }
  return { validForm };
}

function createRule(message: string) {
  return [
    {
      required: true,
      message,
      trigger: 'change',
    },
  ];
}
