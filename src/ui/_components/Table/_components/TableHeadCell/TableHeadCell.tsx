import { FC, useState } from 'react';

import { IoArrowDown, IoArrowUp, IoSwapVertical } from 'react-icons/io5';
import { Button } from 'ui/_components/Button';

import { Cell } from 'ui/_styles/components/Cell';

import type { ITableCell } from 'ui/@types/Table/Table.types';

export const TableHeadCell: FC<ITableCell> = ({ isSort, onSort, value }) => {
  const [sortOption, setSortOption] = useState<'idle' | 'asc' | 'desc'>('idle');

  const onSwitchSortOption = () => {
    if (onSort) onSort();

    const option = { idle: 'asc', asc: 'desc', desc: 'idle' } as const;
    setSortOption(prevState => option[prevState]);
  };

  const renderSortIcon = () => {
    switch (sortOption) {
      case 'idle':
        return <IoSwapVertical size={15} />;

      case 'asc':
        return <IoArrowDown size={15} />;

      case 'desc':
        return <IoArrowUp size={15} />;

      default:
        throw new Error('NOT GOOD');
    }
  };

  return (
    <Cell>
      {isSort ? <Button icon={renderSortIcon()} onClick={onSwitchSortOption} /> : null}
      {value}
    </Cell>
  );
};
