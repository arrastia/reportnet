import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';

const Sidebar = styled(Column)`
  border-right: 1px solid;
  border-right-color: ${({ theme }) => theme.colors.borderColor};
  flex-basis: 200px;
  flex-shrink: 0;
  overflow: auto;
  padding: 1.5rem;
  position: relative;

  @media screen and (max-width: 945px) {
    display: none;
  }
`;

const SidebarButtons = styled('div')`
  align-items: center;
  background-color: var(--large-title-bg);
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
`;

const ThemeTools = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  left: 0;
  position: absolute;
  top: 0;
  width: 100%;
`;

export const Styles = { Sidebar, SidebarButtons, ThemeTools };
