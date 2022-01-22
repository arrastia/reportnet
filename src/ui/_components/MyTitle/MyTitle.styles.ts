import styled, { css } from 'styled-components';

import { Column } from 'ui/_styles/components/Column';
import { Row } from 'ui/_styles/components/Row';

import { fade, slideUp } from 'ui/_styles/keyframes';

interface TitleProps {
  colors?: { degrees: number; firstColor: string; secondColor: string };
  isVisible?: boolean;
}

const renderColorTitle = () => css<TitleProps>`
  background-clip: text;
  background-image: ${({ colors }) => `linear-gradient(${colors?.degrees}deg, ${colors?.firstColor}, ${colors?.secondColor})`};
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;

const ButtonWrapper = styled(Row)`
  flex: 0.5;
  /* margin-left: auto; */
`;

const LargeTitle = styled('h1')<TitleProps>`
  ${renderColorTitle()}
  font-size: 3rem;
  margin: 2rem 1rem;
  opacity: ${({ isVisible }) => (isVisible ? 1 : 0)};
  width: fit-content;
  top: -50px;
  position: relative;
  /* position: absolute; */
`;

const Title = styled('h1')<TitleProps>`
  ${renderColorTitle()}
  ${({ isVisible }) => {
    if (!isVisible) {
      return css`
        animation: ${slideUp.enter} both cubic-bezier(0.4, 0, 0, 1.5);
      `;
    } else {
      return css`
        animation: ${slideUp.leave} both;
      `;
    }
  }}
  
  animation-duration: 0.3s;
  margin: 0;
  opacity: ${({ isVisible }) => (isVisible ? 0 : 1)};
  transition: all 0.1s ease;
  flex: 1;
  display: flex;
  justify-content: center;
`;

const TitleWrapper = styled(Row)<{ isVisible?: boolean }>`
  background-color: ${({ isVisible, theme }) => (isVisible ? 'transparent' : theme.colors.glass70)};
  justify-content: space-between;
  padding: 0.5rem;
  /* position: ${({ isVisible }) => (isVisible ? 'absolute' : 'sticky')}; */
  position: sticky;
  top: 0;
  transition: background-color 0.3s ease-in-out;
  width: 100%;
`;

export const Styles = { ButtonWrapper, LargeTitle, Title, TitleWrapper };
