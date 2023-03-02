import { useEffect } from "react";

type Callback = (...args: any) => void;
type IfMounted<T extends Callback> = (...args: Parameters<T>) => (...args: Parameters<T>) => void;
type Body<T extends Callback> = (IfMounted: IfMounted<T>) => void;

export function useEffectIfMounted<T extends Callback>(f: Body<T>, watches: any[]) {
  useEffect(() => {
    let isMounted = true;
    const _action =
      (action: (...args: any) => void) =>
      (...args: any) => {
        if (isMounted) action(...args);
      };
    f(_action);
    return () => {
      isMounted = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, watches);
}
