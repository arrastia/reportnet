import { IoAdd, IoPencil } from 'react-icons/io5';

import { routes } from 'configuration/routes';

import { ISectionItem } from 'ui/@types/Layout.types';

const actionsSectionItems: ISectionItem[] = [
  { icon: <IoAdd />, id: 0, label: 'Add dataflow', updates: 0, url: routes.USER_SETTINGS },
  { icon: <IoPencil />, id: 1, label: 'Edit dataflow list', updates: 0, url: '' }
];

const permissionsSectionItems: ISectionItem[] = [{ icon: <IoAdd />, id: 0, label: 'Add permission', updates: 0, url: routes.USER_SETTINGS }];

export const homeSections = [
  { title: 'Actions', items: actionsSectionItems },
  { title: 'Permissions', items: permissionsSectionItems }
];
