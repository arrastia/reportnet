export interface ITopTab<T> {
  elements: ITopTabItem<T>[];
  onChange: (value: T) => void;
  value: T;
}

export interface ITopTabItem<T> {
  badge?: number | null;
  id: number;
  isDisabled?: boolean;
  label: string;
  value: T;
}
