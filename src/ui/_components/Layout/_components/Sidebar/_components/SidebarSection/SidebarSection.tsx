import { FC, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { Styles } from './SidebarSection.styles';

import { NotificationBadge } from 'ui/_components/NotificationBadge';

import { ISidebarSection } from './@types/SidebarSection.types';

export const SidebarSection: FC<ISidebarSection> = ({ title, items }) => {
  const { push } = useHistory();

  const [isCollapsed, setIsCollapsed] = useState(false);

  const onToggleCollapse = () => setIsCollapsed(prevState => !prevState);

  const onRedirect = (route: string) => push(route);

  return (
    <Styles.SidebarSection>
      <Styles.TitleWrap>
        <Styles.Title>{title}</Styles.Title>
        <Styles.CollapseIcon isCollapsed={isCollapsed} onClick={onToggleCollapse} />
      </Styles.TitleWrap>
      <Styles.Menu>
        {items.map(item => (
          <span className={'menuItem'} key={item.id} onClick={() => onRedirect(item.url!)}>
            {item.icon}
            {item.label}
            {item.updates && item.updates > 0 ? <NotificationBadge notifications={item.updates} /> : null}
          </span>
        ))}
      </Styles.Menu>
    </Styles.SidebarSection>
  );
};
