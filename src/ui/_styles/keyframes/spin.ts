import { keyframes } from 'styled-components';

export const spin = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

/* @media (prefers-reduced-motion: no-preference) {
  animation: ${spin} infinite 20s linear;
} */
