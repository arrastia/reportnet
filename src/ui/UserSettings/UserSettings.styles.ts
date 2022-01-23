import styled from 'styled-components';

import { basqueCountry } from 'assets/wallpapers';

const App = styled('div')`
  position: relative;
  width: 100%;
`;

const CoverPhoto = styled('div')`
  background: url(${basqueCountry}) no-repeat;
  height: 200px;
  position: absolute;
  top: 0;
  width: 100%;
  z-index: -1;
`;

const Profile = styled('div')`
  padding: 1rem;
  position: relative;
  top: 150px;
`;

export const Styles = { App, CoverPhoto, Profile };
