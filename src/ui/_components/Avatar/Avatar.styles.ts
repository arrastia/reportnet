import styled from 'styled-components';

const Avatar = styled('img')`
  cursor: pointer;
  height: 20vmin;
  transition: transform 0.1s ease-in;
  user-select: none;
  width: 20vmin;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Avatar };
