import styled from 'styled-components';

import { IoChevronDown } from 'react-icons/io5';

const SidebarSection = styled('div')`
  margin-top: 1.5rem;
`;

const Title = styled('div')`
  color: var(--inactive-color);
  font-size: 1.25rem;
`;

const Menu = styled('div')`
  display: flex;
  flex-direction: column;
  white-space: nowrap;

  & .menuItem {
    align-items: center;
    border-radius: 6px;
    color: ${({ theme }) => theme.colors.themeColor};
    cursor: pointer;
    display: flex;
    /* font-size: 14px; */
    font-weight: 400;
    padding: 10px;
    position: relative;
    text-decoration: none;
    transition: 0.3s;

    &:hover {
      background-color: var(--hover-menu-bg);
    }
  }

  & svg,
  & div {
    margin-right: 0.5rem;
    height: 1.25rem;
    width: 1.25rem;
  }
`;

const TitleWrap = styled('div')`
  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-bottom: 14px;
`;

const CollapseIcon = styled(IoChevronDown)<{ isCollapsed: boolean }>`
  color: var(--primary-color);
  cursor: pointer;
  transform: ${({ isCollapsed }) => (isCollapsed ? 'rotate(-90deg)' : 'rotate(0deg)')};
  transition: 250ms ease-in-out;
  height: 1.25rem;
  width: 1.25rem;
`;

export const Styles = { CollapseIcon, Menu, SidebarSection, Title, TitleWrap };
