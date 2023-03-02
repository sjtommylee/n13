import { useEffect, useState } from "react";

// export const useLocalStorage = <T,>(key: string, initialValue: T): [T, (value: T) => void] => {
//   const [storedValue, setStoredValue] = useState(initialValue);
//   useEffect(() => {
//     const item = window.localStorage.getItem(key);
//   }, [key]);

//   const setValue = () => {
//     return [storedValue, setValue];
//   };

//   return [storedValue, setValue];
// };

// similar inplementation
export function useLocalStorage<T>(key: string, fallbackValue: T) {
  const [value, setValue] = useState(fallbackValue);
  useEffect(() => {
    const stored = localStorage.getItem(key);
    setValue(stored ? JSON.parse(stored) : fallbackValue);
  }, [fallbackValue, key]);

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
  }, [key, value]);

  return [value, setValue] as const;
}
