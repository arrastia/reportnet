import styled, { keyframes } from 'styled-components';

import { Button as ButtonStyles } from 'ui/_styles/components/Button';

export const animatedGradient = keyframes`
    0% {
        background-position: 0% 50%;
    }
    50% {
        background-position: 100% 50%;
    }
    100% {
        background-position: 0% 50%;
    }
`;

const Button = styled(ButtonStyles)`
  > span {
    padding: 0.35rem;
  }

  &.primary {
    background: ${({ theme }) => theme.colors.blue};
    color: ${({ theme }) => theme.colors.white};
  }

  &.secondary {
    background-color: var(--secondary-color);
    color: var(--text);
  }

  &.delete {
    background-color: var(--error);
    color: var(--white);
  }

  &.transparent {
    background-color: var(--transparent);
    color: var(--text);

    // > span {
    //   padding: 0.1rem;
    // }
  }

  &.gradient {
    background: ${({ theme }) => theme.colors.gradient({ degrees: 45, firstColor: theme.colors.blue, secondColor: theme.colors.green })};
    color: ${({ theme }) => theme.colors.white};
  }

  &.disabled {
    opacity: 0.5;
    pointer-events: none;
  }

  &.neon {
    -webkit-user-select: none;
    align-items: center;
    color: #ffffff;
    cursor: pointer;
    display: flex;
    font-weight: 700;
    height: 44px;
    padding: 0 16px 2px 0;
    position: relative;
    text-align: center;
    transition: 0.125s ease;
    user-select: none;

    :hover {
      &:before {
        backdrop-filter: saturate(4);
        background: rgba(0, 0, 0, 0.925);
      }
    }

    &:before {
      backdrop-filter: saturate(4);
      background: rgba(0, 0, 0, 0.85);
      border-radius: 16px;
      content: '';
      height: 100%;
      left: 0;
      position: absolute;
      top: 0;
      transition: 0.125s ease;
      width: 100%;
      will-change: transform;
      z-index: -1;
    }

    &:after {
      animation: ${animatedGradient} 80s ease-in-out alternate infinite;
      background: linear-gradient(
        270deg,
        #174299 0%,
        #1edbae 9.09%,
        #00b2ff 18.18%,
        #9f4ced 27.27%,
        #d04c74 36.36%,
        #00b5d5 45.45%,
        #174299 54.54%,
        #00b6cf 63.63%,
        #00d56f 72.72%,
        #174299 81.81%,
        #01bcd5 90.9%,
        #174299 100%
      );
      background-size: 1200% 1200%;
      border-radius: 18px;
      content: '';
      height: calc(100% + 4px);
      left: -2px;
      right: -2px;
      position: absolute;
      top: -2px;
      transition: 0.125s ease;
      width: calc(100% + 4px);
      will-change: transform;
      z-index: -2;
    }

    @media (color-gamut: p3) {
      :hover {
        &:before {
          background: color(display-p3 0 0 0 / 92.5%);
        }
      }

      &:before {
        background: color(display-p3 0 0 0 / 85%);
      }

      &:after {
        background: linear-gradient(
          315deg,
          color(display-p3 0.0902 0.25882 0.6) 0%,
          color(display-p3 0.11765 0.85882 0.68235) 9.09%,
          color(display-p3 0 0.69804 1) 18.18%,
          color(display-p3 0.62353 0.29804 0.92941) 27.27%,
          color(display-p3 0.81569 0.29804 0.65098) 36.36%,
          color(display-p3 0 0.7098 0.83529) 45.45%,
          color(display-p3 0.0902 0.25882 0.6) 54.54%,
          color(display-p3 0 0.71373 0.81176) 63.63%,
          color(display-p3 0 0.83529 0.43529) 72.72%,
          color(display-p3 0.0902 0.25882 0.6) 81.81%,
          color(display-p3 0.00392 0.73725 0.83529) 90.9%,
          color(display-p3 0.0902 0.25882 0.6) 100%
        );
        background-size: 1200% 1200%;
      }
    }
  }
`;

const Icon = styled('span')<{ iconSize?: number }>`
  align-items: center;
  display: flex;
  font-size: x-large;

  svg,
  img {
    height: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
    width: ${({ iconSize }) => `${iconSize}rem` || '2rem'};
  }
`;

const Text = styled('span')`
  font-size: large;
  line-height: normal;
  /* text-transform: capitalize; */
`;

export const Styles = { Button, Icon, Text };
