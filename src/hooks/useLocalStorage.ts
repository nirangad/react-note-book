import { useEffect, useState } from "react";

export default function useLocalStorage<T>(
  key: StorageKey,
  initialValue: T | (() => T)
) {
  const [value, setValue] = useState<T>(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue == "null" || jsonValue === null) {
      if (typeof initialValue === "function") {
        return (initialValue as () => T)();
      }
      else {
        return initialValue;
      }
    } else {
      return JSON.parse(jsonValue as string);
    }
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue] as [T, typeof setValue];
}

export const StorageKeys = { NOTES: "NOTES", TAGS: "TAGS" };
export type StorageKey = keyof typeof StorageKeys;
