export function chunk<T>(array: T[], size: number): T[][] {
    if (size <= 0) throw new Error("Chunk size must be greater than zero.");
    return Array.from({ length: Math.ceil(array.length / size) }, (_, i) =>
      array.slice(i * size, i * size + size)
    );
  }
  
  export function flatten<T>(array: T[][]): T[] {
    return array.reduce((acc, val) => acc.concat(val), []);
  }
  
  export function unique<T>(array: T[]): T[] {
    return Array.from(new Set(array));
  }
  