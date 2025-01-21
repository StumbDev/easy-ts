export function isNode(): boolean {
    return typeof process !== "undefined" && process.versions != null && process.versions.node != null;
  }
  
  export function isBrowser(): boolean {
    return typeof window !== "undefined" && typeof window.document !== "undefined";
  }
  