import styled from 'styled-components';

const Dataflow = styled('div')`
  background-color: ${({ theme }) => theme.colors.glass};
  border-radius: 15px;
  margin: 1rem;
  padding: 1rem;
  cursor: pointer;
  transition: transform 0.1s ease-out;

  &:active {
    transform: scale(0.99);
    transition: transform 0.1s ease-in;
  }
`;

export const Styles = { Dataflow };
