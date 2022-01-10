import { FC } from 'react';
import { useRecoilValue } from 'recoil';

import { Styles } from './Layout.styles';

import { Header } from './_components/Header';
import { Sidebar } from './_components/Sidebar';

import { tokenStore } from 'ui/_tools/Atoms/UserStore';

interface LayoutProps {}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const token = useRecoilValue(tokenStore);

  return (
    <Styles.Layout>
      <Header />
      <Styles.Main>
        {token ? <Sidebar /> : null}
        {children}
      </Styles.Main>
    </Styles.Layout>
  );
};
