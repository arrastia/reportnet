import styled, { css } from 'styled-components';

import { fade, slideUp } from 'ui/_styles/keyframes';

import { LargeTitleProps } from './@types/Title.types';

const ButtonWrapper = styled('div')`
  align-items: center;
  display: flex;
`;

const TitleWrapper = styled('div')<LargeTitleProps>`
  /* margin: 0.5rem 0; */
  align-items: center;
  backdrop-filter: ${({ isShrunk, isLargeTitle }) => (isShrunk || !isLargeTitle ? 'blur(20px)' : 'none')};
  background-color: ${({ isShrunk, isLargeTitle }) => (isShrunk || !isLargeTitle ? 'var(--large-title-bg)' : 'transparent')};
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  position: sticky;
  top: 0;
  transition: background-color 0.25s ease-in-out;
  z-index: 1;
  /* width: 1010px; */

  /* filter: blur(10px); */
  /* left: 0; */
  /* margin-top: 44px; */
  /* opacity: 0.35; */
  /* padding: 0 1rem; */
  /* position: absolute; */
  /* right: 0; */
  /* top: 0; */
  /* z-index: 1; */
`;

const Title = styled('h1')<LargeTitleProps>`
  /* position: relative; */
  ${({ isShrunk, isLargeTitle }) => {
    if (isShrunk || !isLargeTitle) {
      return css`
        opacity: 1;
        animation: ${slideUp.enter} both cubic-bezier(0.4, 0, 0, 1.5);
      `;
    } else {
      return css`
        opacity: 0;
        animation: ${slideUp.leave} both;
      `;
    }
  }}

  animation-duration: 0.3s;
  transition: all 0.1s ease;

  /* linear-gradient(45deg, #f400ff, #00d3ff) */
  background-image: ${({ bgColor }) => `linear-gradient(${bgColor?.degrees}deg, ${bgColor?.firstColor}, ${bgColor?.secondColor})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const LargeTitle = styled('h1')<LargeTitleProps>`
  display: flex;
  font-size: 3rem;
  margin-left: 1rem;
  /* position: relative;
  top: 1.5rem; */
  animation-duration: 0.3s;

  ${({ isShrunk }) => {
    if (isShrunk) {
      return css`
        animation: ${fade.leave} both ease-out;
      `;
    } else {
      return css`
        animation: ${fade.enter} both ease-in;
      `;
    }
  }}

  background-image: ${({ bgColor }) => `linear-gradient(${bgColor?.degrees}deg, ${bgColor?.firstColor}, ${bgColor?.secondColor})`};
  background-clip: text;
  -webkit-background-clip: text;
  -webkit-text-fill-color: ${({ bgColor }) => (bgColor ? 'transparent' : '')};
`;

export const Styles = { ButtonWrapper, LargeTitle, Title, TitleWrapper };
