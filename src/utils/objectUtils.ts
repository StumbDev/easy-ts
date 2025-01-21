export function deepMerge<T>(target: T, source: Partial<T>): T {
    if (!target || typeof target !== "object") return target;
    if (!source || typeof source !== "object") return target;
  
    for (const key in source) {
      if (
        source[key] instanceof Object &&
        target[key] &&
        typeof target[key] === "object"
      ) {
        (target as any)[key] = deepMerge(target[key] as any, source[key] as any);
      } else {
        (target as any)[key] = source[key];
      }
    }
    return target;
  }
  
  
  export function invert<T extends Record<string, any>>(
    obj: T
  ): Record<T[keyof T], keyof T> {
    const result: Record<any, string> = {};
    for (const key in obj) {
      result[obj[key]] = key;
    }
    return result;
  }
  