import styled from 'styled-components';

export const Avatar = styled('div')<{ bgColor?: string; size?: { height: string; width: string } }>`
  align-self: center;
  background: ${({ bgColor }) => bgColor || 'lightblue'};
  border-radius: 50%;
  cursor: pointer;
  height: ${({ size }) => (size?.height ? size.height : '20vmin')};
  transition: transform 0.1s ease-in;
  user-select: none;
  width: ${({ size }) => (size?.width ? size.width : '20vmin')};

  font-size: 1.5rem;
  line-height: ${({ size }) => (size?.height ? size.height : '20vmin')};
  text-align: center;
  text-transform: uppercase;

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;
