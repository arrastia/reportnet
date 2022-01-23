import { IoPencil } from 'react-icons/io5';

import { Styles } from './UserSettings.styles';

import { Title } from 'ui/_components/Title';
import { UserCard } from 'ui/_components/UserCard';

import { useSidebar } from 'ui/_tools/Hooks/useSidebar';

import { settingsSections } from './_tools/Helpers/settingsSections.helper';

export const UserSettings = () => {
  useSidebar({ cardShape: 'EDITING', sections: [{ title: 'Settings', items: settingsSections }] });

  return (
    <Styles.App>
      <Title
        isLargeTitle={false}
        isShrunk={false}
        leftButtons={[]}
        rightButtons={[{ id: 0, onClick: () => {}, icon: <IoPencil />, label: 'Edit' }]}
        title={'Karolina'}
      />
      <UserCard />
    </Styles.App>
  );
};
