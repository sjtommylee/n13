export const isArray = Array.isArray;
export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === "object";
export const isNumber = (value: unknown): value is number => typeof value === "number";
export const isBoolean = (value: unknown): value is Boolean => typeof value === "boolean";
export const isElement = (value: unknown): value is Element => isObject(value);
export const isString = (value: unknown): value is string => typeof value === "string";
export const isFunction = (value: unknown): value is Function => typeof value === "function";
export const isDate = (value: unknown): value is Date => isObject(value) && isFunction(value.catch);
export const isClient = typeof window != "undefined";

export function isPromise<T = any>(value: unknown): value is Promise<T> {
  return isObject(value) && isFunction(value.then) && isFunction(value.catch);
}
