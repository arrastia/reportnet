import styled, { css } from 'styled-components';
import { zoom } from 'ui/_styles/keyframes';

const ButtonWrapper = styled('span')`
  display: flex;
  justify-content: flex-end;

  button {
    margin-left: 0.5rem;
  }
`;

const CloseButton = styled('span')`
  cursor: pointer;
  height: 16px;
  position: absolute;
  right: 16px;
  top: 16px;
  width: 16px;

  &:before,
  &:after {
    background: #999;
    border-radius: 100%;
    content: '';
    height: 2px;
    left: 0;
    margin-top: -1px;
    position: absolute;
    top: 50%;
    transition: background 0.2s;
    width: 100%;
    -webkit-transition: background 0.2s;
  }

  &:before {
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }

  &:after {
    transform: rotate(-45deg);
    -webkit-transform: rotate(-45deg);
  }

  &:hover:before,
  &:hover:after {
    background: #333;
  }
`;

const Content = styled('div')`
  flex-grow: 1;
`;

const Dialog = styled('div')<{
  animation: 'door' | 'fade' | 'flip' | 'rotate' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp' | 'zoom';
  animationType: 'enter' | 'leave';
}>`
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2), 0 1px 2px rgba(0, 0, 0, 0.4); */
  /* box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); */
  backdrop-filter: blur(100px);
  border-radius: 10px;
  bottom: 0;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.21), 0 6px 6px rgba(0, 0, 0, 0.25);
  display: flex;
  flex-direction: column;
  height: fit-content;
  left: 0;
  margin: auto;
  padding: 2.5rem;
  position: absolute;
  right: 0;
  top: 0;
  width: fit-content;
  z-index: 101;

  /* height: 90vh;
  width: 90vw; */

  background: var(--theme-bg-color-dialog);
  backdrop-filter: blur(100px);
  /* filter: blur(1px); */
  -webkit-backdrop-filter: blur(100px);

  animation: ${({ animation, animationType }) =>
    css`
      ${zoom[animationType]} both ${animationType === 'enter' ? 'cubic-bezier(0.4, 0, 0, 1.5)' : ''}
    `};

  &:focus {
    outline: none;
  }
`;

const Footer = styled('div')`
  align-items: center;
  display: flex;
  justify-content: flex-end;

  &.leftSideFooter {
    justify-content: space-between;
  }
`;

const Title = styled('h3')`
  .title {
    // border-bottom: 1px solid #ccc;
    margin-bottom: 1rem;
    padding-bottom: 1rem;
  }
`;

export const Styles = { ButtonWrapper, CloseButton, Content, Dialog, Footer, Title };
