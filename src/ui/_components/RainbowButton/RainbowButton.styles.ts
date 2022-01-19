import styled, { keyframes } from 'styled-components';

export const animatedgradient = keyframes`
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

const Content = styled.div`
  all: revert;
  display: inline-block;
  overflow: hidden;
  height: 100%;
  padding: 4px;
  transition: 0.125s ease;
  justify-content: center;

  :hover {
    transform: scale(1.05);
  }

  :active {
    transform: scale(0.95) !important;
  }
`;

const Button = styled.a`
  transition: 0.125s ease;
  will-change: transform;
`;

const ButtonInner = styled.div`
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
    animation: ${animatedgradient} 80s ease-in-out alternate infinite;
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
`;

const Logo = styled.img`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  all: revert;
  border-radius: 11px;
  box-shadow: 0px 2px 6px rgba(0, 0, 0, 0.2);
  height: 34px;
  margin-left: 6px;
  margin-right: 10px;
  margin-top: 2px;
  user-select: none;
  width: 34px;
`;

export const Styles = { Button, ButtonInner, Content, Logo };
