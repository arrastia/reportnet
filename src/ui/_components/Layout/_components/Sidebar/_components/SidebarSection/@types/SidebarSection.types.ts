import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export interface ISidebarSection {
  items: ISectionItem[];
  title: string;
}

export interface ISectionItem {
  icon: IconType | ReactElement;
  id: string | number;
  label: string;
  updates: number;
  url: string;
}
