import { Fragment } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { useRecoilValue } from 'recoil';

import { ThemeProvider } from 'styled-components';

import { GlobalStyles } from './Global.styles';

import { routes } from 'configuration/routes';

import { Layout } from 'ui/_components/Layout';

import { base, theme } from 'ui/_styles/themes';

import { Home } from 'ui/Home';
import { PublicHome } from 'ui/PublicHome';
import { UserSettings } from 'ui/UserSettings';

import { themeStore, tokenStore } from 'ui/_tools/Atoms/UserStore';

export const App = () => {
  const isDarkMode = useRecoilValue(themeStore);
  const token = useRecoilValue(tokenStore);

  const renderRouting = () => {
    if (!token) return <Route component={PublicHome} exact path={routes.DATAFLOWS} />;

    return (
      <Fragment>
        <Route component={Home} exact path={routes.DATAFLOWS} />
        <Route component={UserSettings} exact path={routes.USER_SETTINGS} />
      </Fragment>
    );
  };

  return (
    <ThemeProvider theme={{ ...base, ...theme[isDarkMode ? 'dark' : 'light'] }}>
      <GlobalStyles />
      <Router>
        <Layout>
          <Switch>{renderRouting()}</Switch>
        </Layout>
      </Router>
    </ThemeProvider>
  );
};
