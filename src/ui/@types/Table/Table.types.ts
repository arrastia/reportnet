export interface ITableCell {
  isSort?: boolean;
  onSort?: () => void;
  value: string;
}
