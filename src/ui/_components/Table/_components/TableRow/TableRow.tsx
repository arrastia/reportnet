import { FC } from 'react';

import { Styles } from './TableRow.styles';

import type { ITableRow } from './@types/TableRow.types';

export const TableRow: FC<ITableRow> = ({ children, onRowClick }) => {
  return <Styles.TableRow onClick={onRowClick}>{children}</Styles.TableRow>;
};
