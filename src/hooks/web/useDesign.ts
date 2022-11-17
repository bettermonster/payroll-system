import { useAppProviderContext } from '/@/components/Application';
export function useDesign(names: string) {
  const values = useAppProviderContext();
  return {
    prefixCls: `${values?.prefixCls}-${names}`,
  };
}
