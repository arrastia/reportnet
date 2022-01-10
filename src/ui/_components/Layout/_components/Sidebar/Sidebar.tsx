import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';

import { IoLogoCodepen, IoLogoGithub, IoLogoTwitter, IoMenu } from 'react-icons/io5';

import { Styles } from './Sidebar.styles';

import { routes } from 'configuration/routes';

import { Avatar } from 'ui/_components/Avatar';
import { Button } from 'ui/_components/Button';
import { SidebarSection } from './_components/SidebarSection';
import { ThemeButton } from 'ui/_components/ThemeButton';
import { UserCard } from 'ui/_components/UserCard';

import { userInformationStore, userRoleStore } from 'ui/_tools/Atoms/UserStore';

import { useBreakpoint } from 'ui/_tools/Hooks/useBreakPoint';

import { album, projects } from './_tools/Helpers/sections.helpers';
import { sidebarStore } from 'ui/_tools/Atoms/LayoutStore';

export const Sidebar = () => {
  // const { name } = useRecoilValue(userInformationStore);
  // const userRole = useRecoilValue(userRoleStore);
  const sections = useRecoilValue(sidebarStore);

  const { breakpoint } = useBreakpoint();
  const { push } = useHistory();

  const onRedirect = (to: string) => push(to);

  return breakpoint !== 'phone' ? (
    <Styles.Sidebar>
      {/* <Styles.ThemeTools>
        <ThemeButton />
        <Button icon={<IoMenu />} onClick={() => onRedirect(routes.DATAFLOW)} />
      </Styles.ThemeTools> */}
      <UserCard />
      {/* <Styles.SidebarButtons>
        <Button icon={<IoLogoGithub />} />
        <Button icon={<IoLogoCodepen />} />
        <Button icon={<IoLogoTwitter />} onClick={() => onRedirect(routes.DATAFLOW)} />
        <Button icon={'📧'} onClick={() => onRedirect(routes.DATAFLOW)} />
      </Styles.SidebarButtons> */}
      {/* <SidebarSection items={projects} title="Dataflow" />
      <SidebarSection items={album} title="Dataset" /> */}
      {sections.map(section => (
        <SidebarSection items={section.items} key={section.title} title={section.title} />
      ))}
    </Styles.Sidebar>
  ) : null;
};

// <Styles.SidebarUserInfo className={`zoom-${userRole ? 'enter' : 'leave'}`} type={userRole ? 'enter' : 'leave'}>
