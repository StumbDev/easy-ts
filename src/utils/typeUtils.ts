export type PartialExcept<T, K extends keyof T> = Partial<T> & Pick<T, K>;

export type Nullable<T> = T | null;
