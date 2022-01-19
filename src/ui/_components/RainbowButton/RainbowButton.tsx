import { FC } from 'react';

import { Styles } from './RainbowButton.styles';

import { rainbow_icon } from 'assets/images';

import { FOUNTAIN_ANIMATION_ID } from 'configuration/constants/styles.constants';

import { Label } from './_components/Label/Label';

import { useFountain } from 'ui/_tools/Hooks/useFountain';

export const RainbowButton: FC = ({}) => {
  useFountain(true);

  return (
    <Styles.Content>
      <Styles.Button id={FOUNTAIN_ANIMATION_ID} onClick={() => {}}>
        <Styles.ButtonInner>
          <Styles.Logo src={rainbow_icon} width="34" />
          <Label />
        </Styles.ButtonInner>
      </Styles.Button>
    </Styles.Content>
  );
};
