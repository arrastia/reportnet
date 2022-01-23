import styled from 'styled-components';

import { Column } from 'ui/_styles/components/Column';
import { Row } from 'ui/_styles/components/Row';

const PublicPage = styled(Column)`
  max-width: 1280px;
  overflow: hidden auto;
  position: relative;
  width: 100%;
`;

const Subtitle = styled('h3')`
  margin: 0;
`;

const ButtonWrapper = styled(Row)`
  justify-content: center;
`;

const ParagraphWrapper = styled(Column)``;

const Content = styled(Column)`
  padding: 1rem;
`;

export const Styles = { ButtonWrapper, ParagraphWrapper, PublicPage, Subtitle, Content };
