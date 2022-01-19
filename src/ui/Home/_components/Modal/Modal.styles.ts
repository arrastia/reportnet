import styled from 'styled-components';

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

const Mask = styled('div')``;

const Modal = styled('div')``;

export const Styles = { CloseButton, Mask, Modal };
