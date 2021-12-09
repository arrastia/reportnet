import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';
import { Row } from 'ui/_styles/components/Row';

const SidebarUser = styled(Row)``;

const SidebarUserInfo = styled(Column)`
  gap: 0;

  .name {
    font-size: 1.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    width: fit-content;
    word-wrap: break-word;
  }

  .role {
    color: ${({ theme }) => theme.colors.blue};
    font-size: 0.75rem;
  }
`;

export const Styles = { SidebarUser, SidebarUserInfo };
