import type { RouteLocationRaw, Router } from 'vue-router';
import { useRouter } from 'vue-router';
import { PageEnum } from '/@/enums/pageEnum';

function handleError(e: Error) {
  console.log(e);
}

export function useGo(_router?: Router) {
  const { push } = _router || useRouter();
  function go(opt: RouteLocationRaw = PageEnum.BASE_HOME) {
    if (!opt) {
      return;
    }
    //push返回的是promise
    push(opt).catch(handleError);
  }
  return go;
}
