import { IoColorPalette, IoNotifications } from 'react-icons/io5';

import { routes } from 'configuration/routes';

import { ISectionItem } from 'ui/@types/Layout.types';

export const settingsSections: ISectionItem[] = [
  { icon: <IoNotifications />, id: 0, label: 'Notifications and sounds', updates: 0, url: routes.USER_SETTINGS },
  { icon: <IoColorPalette />, id: 1, label: 'Appearance', updates: 0, url: '' }
];
