export function capitalize(str: string): string {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
  
  export function snakeToCamel(snake: string): string {
    return snake.replace(/(_\w)/g, match => match[1].toUpperCase());
  }
  