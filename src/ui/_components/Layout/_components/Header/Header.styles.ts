import styled from 'styled-components';

import { Row } from 'ui/_styles/components/Row';

const ActionButtons = styled(Row)`
  padding: 0.5rem;
  gap: 0.5rem;
`;

const Header = styled('header')`
  align-items: center;
  border-bottom: 1px solid;
  border-bottom-color: ${({ theme }) => theme.colors.borderColor};
  display: flex;
  flex-shrink: 0;
  justify-content: space-between;
  /* height: 58px; */
  /* padding: 0 30px; */
  /* white-space: nowrap; */
  width: 100%;

  & .avatar {
    @media screen and (min-width: 945px) {
      display: none;
    }
  }
`;

export const Styles = { ActionButtons, Header };
