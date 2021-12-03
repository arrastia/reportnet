import { FC } from 'react';

import { Styles } from './NotificationBadge.styles';

interface Props {
  notifications: number;
}

export const NotificationBadge: FC<Props> = ({ notifications }) => {
  return <Styles.Badge>{notifications}</Styles.Badge>;
};
