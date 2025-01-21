export function debounce<T extends (...args: any[]) => void>(fn: T, delay: number): (...args: Parameters<T>) => void {
    let timeout: ReturnType<typeof setTimeout>; // Works in both Node.js and browser
    return (...args: Parameters<T>) => {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn(...args), delay);
    };
  }
  
  
  export async function retry<T>(fn: () => Promise<T>, retries: number = 3): Promise<T> {
    let attempts = 0;
    while (attempts < retries) {
      try {
        return await fn();
      } catch (error) {
        attempts++;
        if (attempts >= retries) throw error; // Throw the error if retries are exhausted
      }
    }
    throw new Error("This code should never be reached."); // Satisfy TypeScript
  }
  