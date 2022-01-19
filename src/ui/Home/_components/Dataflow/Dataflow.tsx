import { FC, useState } from 'react';

import { Styles } from './Dataflow.styles';

import { DataflowProps } from './@types/Dataflow.types';

export const Dataflow: FC<DataflowProps> = ({ description, name }) => {
  const [isSelected, setIsSelected] = useState(false);

  return <Styles.Dataflow>{name}</Styles.Dataflow>;
};
