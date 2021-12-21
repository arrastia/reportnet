import { FC } from 'react';

import { Styles } from './Logo.styles';

import { logo } from 'assets/images';

import { FOUNTAIN_ANIMATION_ID } from 'configuration/constants/styles.constants';

import { useFountain } from 'ui/_tools/Hooks/useFountain';

import type { LogoProps } from './@types/Logo.types';

export const Logo: FC<LogoProps> = ({ onClick }) => {
  useFountain();

  return (
    <Styles.Logo id={FOUNTAIN_ANIMATION_ID} onClick={onClick}>
      <Styles.Icon src={logo} />
      <h1>Reportnet</h1>
    </Styles.Logo>
  );
};
