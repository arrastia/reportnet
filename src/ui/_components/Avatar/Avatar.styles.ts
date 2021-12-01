import styled from 'styled-components';

const Avatar = styled('img')<{ size?: { height: string; width: string } }>`
  cursor: pointer;
  height: ${({ size }) => (size?.height ? size.height : '20vmin')};
  transition: transform 0.1s ease-in;
  user-select: none;
  width: ${({ size }) => (size?.width ? size.width : '20vmin')};

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Avatar };
