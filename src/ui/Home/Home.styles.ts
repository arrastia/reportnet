import styled from 'styled-components';
import { Row } from 'ui/_styles/components/Row';

const App = styled('div')`
  background-color: ${({ theme }) => theme.colors.background};
  /* padding: 1rem; */
  position: relative;
  width: 100%;
  overflow: auto;
`;

const List = styled(Row)`
  flex-wrap: wrap;
`;

export const Styles = { App, List };
