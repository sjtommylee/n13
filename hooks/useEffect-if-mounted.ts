import { useEffect } from "react";

type Callback = () => void;
type IfMounted = () => void;
type Body = () => void;

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
