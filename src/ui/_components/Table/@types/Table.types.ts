export interface ITable {
  headers: string[];
  rows: Row[];
}

interface Row {
  id: number | string;
  cells: Cell[];
}

interface Cell {}
