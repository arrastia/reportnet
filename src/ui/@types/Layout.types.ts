import { Icon } from './Media.types';

export type UserCardType = 'EDITING' | 'INFORMATION' | 'ONLY_ICON';

export interface ISection {
  title: string;
  items: ISectionItem[];
}

export interface ISectionItem {
  icon: Icon;
  id: string | number;
  label: string;
  updates: number;
  url: string;
}
