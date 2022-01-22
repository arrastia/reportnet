import { keyframes } from 'styled-components';

const enter = keyframes`
  from {
    transform: translate3d(0, 100px, 0);
    -webkit-transform: translate3d(0, 100px, 0);
  }
`;

const leave = keyframes`
  to {
    transform: translate3d(0, 100px, 0);
    -webkit-transform: translate3d(0, 100px, 0);
  }
`;

export const slideUp = { enter, leave };
