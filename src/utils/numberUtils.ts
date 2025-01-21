export function range(start: number, end: number, step = 1): number[] {
    const result = [];
    for (let i = start; i < end; i += step) {
      result.push(i);
    }
    return result;
  }
  
  export function clamp(value: number, min: number, max: number): number {
    return Math.min(Math.max(value, min), max);
  }
  
  export function round(value: number, decimals: number = 2): number {
    return Number(Math.round(Number(`${value}e${decimals}`)) + `e-${decimals}`);
  }
  