/**
 * @Procedure
 * emits side effect and doesn't return anything.
 */
export type Procedure = (...args: any[]) => void;

export interface Options {
  // intention here is that if this is set to true, the debounce will be called immediatley
  now?: boolean;
}

export function debounce<F extends Procedure>(a: any, b: any, c: any) {
  return function () {} as any;
}

export function useDebounce<T extends Procedure>(handler: T, wait?: number, options?: Options): T {
  return debounce(handler, wait, options);
}
