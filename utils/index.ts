export const isArray = Array.isArray;
export const isObject = (value: unknown): value is Record<any, any> =>
  value !== null && typeof value === "object";
export const isNumber = (value: unknown): value is number => typeof value === "number";
export const isBoolean = (value: unknown): value is Boolean => typeof value === "boolean";
export const isElement = (value: unknown): value is Element => isObject(value);
export const isString = (value: unknown): value is string => typeof value === "string";
