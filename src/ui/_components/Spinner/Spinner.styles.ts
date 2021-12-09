import styled, { keyframes } from 'styled-components';

const sync = keyframes`{
    33% {
      transform: translateY(10px);
    }
    66% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  }`;

const clip = keyframes`{
    0% {
      transform: rotate(0deg) scale(1);
    }
    50% {
      transform: rotate(180deg) scale(0.8);
    }
    100% {
      transform: rotate(360deg) scale(1);
    }
  }`;

const ClipSpinner = styled('span')`
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${clip};
  animation-timing-function: linear;
  background: transparent;
  border-bottom-color: transparent;
  border-radius: 100%;
  border: 2px solid;
  display: inline-block;
  -webkit-animation-fill-mode: both;
  -webkit-animation-iteration-count: infinite;
  -webkit-animation-name: clip;
  -webkit-animation-timing-function: linear;
`;

const Spinner = styled('div')`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

const SyncLoader = styled('span')`
  animation-fill-mode: both;
  animation-iteration-count: infinite;
  animation-name: ${sync};
  animation-timing-function: ease-in-out;
  border-radius: 100%;
  display: inline-block;
`;

export const Styles = { ClipSpinner, Spinner, SyncLoader };
