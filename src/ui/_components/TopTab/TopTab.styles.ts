import styled, { css } from 'styled-components';

import { Badge as SBadge } from 'ui/_styles/components/Badge';
import { Row } from 'ui/_styles/components/Row';

const TabLabel = styled('p')`
  margin: 0;
  overflow: hidden;
  /* padding: 1rem; */
  pointer-events: none;
  position: relative;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const Indicator = styled('div')`
  background-color: ${({ theme }) => theme.colors.glass};
  border-radius: 6px;
  box-shadow: 0px 2px 5px rgba(11, 37, 105, 0.04), 0px 1px 0px rgba(11, 37, 105, 0.04);
  height: 32px;
  position: absolute;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
  width: fit-content;
`;

const Tab = styled(Row)<{ isActive: boolean }>`
  /* align-items: center; */
  /* justify-content: center; */
  /* min-width: 250px; */
  /* color: #818997; */
  cursor: pointer;
  /* padding: 0 0.5rem; */
  position: relative;
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);

  border-radius: 10px;
  padding: 0.75rem;

  ${({ isActive }) =>
    isActive
      ? css`
          box-shadow: 0px 2px 5px rgba(11, 37, 105, 0.04), 0px 1px 0px rgba(11, 37, 105, 0.04);
          background: ${({ theme }) => theme.colors.gradient({ degrees: 45, firstColor: theme.colors.blue, secondColor: theme.colors.green })};
          color: white;
        `
      : css`
          box-shadow: 0px 2px 5px rgba(11, 37, 105, 0.04), 0px 1px 0px rgba(11, 37, 105, 0.04);
          background-color: ${({ theme }) => theme.colors.glass};
        `}

  &:hover {
    /* background: lightgray; */
    /* transform: scale(1.05); */
  }

  &:active {
    transform: scale(0.97);
    transition: transform 0.1s ease-in;
  }
`;

const TabBar = styled(Row)`
  /* align-items: center; */
  /* display: flex; */
  /* margin: 1rem 0; */
  /* overflow: auto; */
  /* padding: 0 1rem; */
  background-color: var(--transparent);
  gap: 1rem;
  /* border-radius: 8px; */
  justify-content: center;
  position: relative;
  /* margin: 2rem; */
`;

const Badge = styled(SBadge)`
  font-size: 0.75rem;
  height: 0.75rem;
  position: relative;
  transform: translate(0);
  width: 0.75rem;
`;

export const Styles = { Badge, Indicator, Tab, TabBar, TabLabel };
