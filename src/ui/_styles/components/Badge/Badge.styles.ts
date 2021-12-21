import styled from 'styled-components';

export const Badge = styled('div')`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.glass};
  border-radius: 50%;
  display: flex;
  height: 1rem;
  justify-content: center;
  padding: 0.5rem;
  position: absolute;
  right: 0;
  top: 0;
  transform: translate(50%, -50%);
  width: 1rem;
`;
