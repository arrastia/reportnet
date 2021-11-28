import { FC } from 'react';

import { Styles } from './Avatar.styles';

import { memoji } from 'assets/images';

import { AvatarProps } from './@types/Avatar.types';

export const Avatar: FC<AvatarProps> = ({ onClick }) => <Styles.Avatar alt="" onClick={onClick} src={memoji} />;
