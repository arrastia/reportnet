import { FC } from 'react';

import { Styles } from './Table.styles';

import { TableRow } from './_components/TableRow';

import { TableCell } from './_components/TableCell';
import { TableHeadCell } from './_components/TableHeadCell';

import type { ITable } from './@types/Table.types';

export const Table: FC<ITable> = ({ headers, rows }) => {
  const renderTableRows = () => rows.map(row => <div key={row.id}></div>);

  return (
    <Styles.Table>
      <Styles.TableHead>
        <TableRow>
          {headers.map(header => (
            <TableHeadCell isSort={true} key={header} value={header} />
          ))}
        </TableRow>
      </Styles.TableHead>
      <Styles.TableBody>
        <TableRow>{renderTableRows()}</TableRow>
      </Styles.TableBody>
    </Styles.Table>
  );
};
