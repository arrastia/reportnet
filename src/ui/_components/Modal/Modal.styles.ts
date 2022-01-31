import styled, { css } from 'styled-components';
import { fade } from 'ui/_styles/keyframes';

// import { fade } from 'styles/Keyframes';

const sizes = css`
  height: 100%;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 100;
`;

const Mask = styled('div')`
  ${sizes}
  background: rgba(0, 0, 0, 0.3);
  position: absolute;
`;

const Modal = styled('div')<{ animationType: 'enter' | 'leave' }>`
  ${sizes}
  position: fixed;

  animation: ${({ animationType }) =>
    css`
      ${fade[animationType]} both ${animationType === 'enter' ? 'ease-in' : 'ease-out'}
    `};
`;

export const Styles = { Mask, Modal };
