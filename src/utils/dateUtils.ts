export function formatDate(date: Date, format: string): string {
    const map: Record<string, string | number> = {
      YYYY: date.getFullYear(),
      MM: String(date.getMonth() + 1).padStart(2, "0"),
      DD: String(date.getDate()).padStart(2, "0"),
      hh: String(date.getHours()).padStart(2, "0"),
      mm: String(date.getMinutes()).padStart(2, "0"),
      ss: String(date.getSeconds()).padStart(2, "0"),
    };
    return format.replace(/YYYY|MM|DD|hh|mm|ss/g, (match) => `${map[match]}`);
  }
  
  export function addDays(date: Date, days: number): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
  
  export function subtractDays(date: Date, days: number): Date {
    return addDays(date, -days);
  }
  