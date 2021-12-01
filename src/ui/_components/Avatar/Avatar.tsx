import { FC } from 'react';

import { Styles } from './Avatar.styles';

import { logo } from 'assets/images';

import { AvatarProps } from './@types/Avatar.types';

export const Avatar: FC<AvatarProps> = ({ onClick, size }) => <Styles.Avatar alt="" onClick={onClick} size={size} src={logo} />;
