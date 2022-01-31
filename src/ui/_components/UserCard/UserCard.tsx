import { FC } from 'react';
import { useHistory } from 'react-router';
import { useRecoilValue } from 'recoil';

import { Styles } from './UserCard.styles';

import { memoji } from 'assets/images';

import { routes } from 'configuration/routes';

import { Avatar } from 'ui/_components/Avatar';

import { userCardShapeStore } from 'ui/_tools/Atoms/LayoutStore';
import { userInformationStore, userRoleStore } from 'ui/_tools/Atoms/UserStore';

import { UserCardProps } from './@types/UserCard.types';

export const UserCard: FC<UserCardProps> = ({ size }) => {
  const { name } = useRecoilValue(userInformationStore);
  const cardShape = useRecoilValue(userCardShapeStore);
  const userRole = useRecoilValue(userRoleStore);

  const { push } = useHistory();

  const getSubtitle = () => {
    const subtitle = { ONLY_ICON: 'Welcome back 👋', INFORMATION: userRole, EDITING: 'editing' };

    return subtitle[cardShape];
  };

  const onRedirect = (to: string) => push(to);

  return (
    <Styles.SidebarUser>
      <Avatar
        emoji="🌈"
        initials="KM"
        onClick={() => onRedirect(routes.USER_SETTINGS)}
        size={{ height: size?.height || '7vmin', width: size?.width || '7vmin' }}
        type="EMOJI"
        url={memoji}
      />
      <Styles.SidebarUserInfo>
        <span className="name">{name}</span>
        <span className="role">{getSubtitle()}</span>
      </Styles.SidebarUserInfo>
    </Styles.SidebarUser>
  );
};
