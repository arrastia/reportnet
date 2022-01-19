import { FC, useState } from 'react';

import { IoArrowDown, IoArrowUp, IoSwapVertical } from 'react-icons/io5';
import { Button } from 'ui/_components/Button';

import { Cell } from 'ui/_styles/components/Cell';

import type { ITableCell } from './@types/TableCell.types';

export const TableCell: FC<ITableCell> = ({ isSort, onSort, value }) => {
  const [sortOption, setSortOption] = useState<'idle' | 'asc' | 'desc'>('idle');

  const onSwitchSortOption = () => {
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
      <Button icon={renderSortIcon()} onClick={onSwitchSortOption} />
      {value}
    </Cell>
  );
};
