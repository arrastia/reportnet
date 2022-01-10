import styled from 'styled-components';

const Layout = styled('div')`
  background-color: ${({ theme }) => theme.colors.glass};
  backdrop-filter: blur(20px);
  border-radius: 14px;
  display: flex;
  flex-direction: column;
  font-size: 15px;
  font-weight: 500;
  height: 90vh;
  max-height: 860px;
  max-width: 1250px;
  overflow: hidden;
  width: 90vw;
  -webkit-backdrop-filter: blur(20px);

  /* background-color: rgba(255, 255, 255, 0.9);

  @supports ((-webkit-backdrop-filter: none) or (backdrop-filter: none)) {
    -webkit-backdrop-filter: blur(2em);
    backdrop-filter: blur(2em);
    background-color: rgba(255, 255, 255, 0.5);
  } */
`;

const Main = styled('main')`
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  position: relative;
`;

const View = styled('div')``;

export const Styles = { Layout, Main, View };
