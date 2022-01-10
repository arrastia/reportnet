import { IoCamera, IoInformationCircle, IoKey, IoLocation, IoPencil, IoPeople, IoPersonAdd } from 'react-icons/io5';

import { routes } from 'configuration/routes';

import { ISectionItem } from '../../_components/SidebarSection/@types/SidebarSection.types';

export const album: ISectionItem[] = [
  { icon: <IoCamera />, id: 0, label: 'All photos', updates: 0, url: routes.DATAFLOWS },
  { icon: <IoPeople />, id: 1, label: 'People', updates: 0, url: '' },
  { icon: <IoLocation />, id: 2, label: 'Places', updates: 0, url: '' }
];

export const projects: ISectionItem[] = [
  { icon: <IoInformationCircle />, id: 0, label: 'Properties', updates: 0, url: routes.DATAFLOWS },
  { icon: <IoPencil />, id: 1, label: 'Edit', updates: 0, url: '' },
  { icon: <IoKey />, id: 2, label: 'API key', updates: 0, url: '' },
  { icon: <IoPersonAdd />, id: 3, label: 'Manage requester', updates: 0, url: '' },
  { icon: <IoPeople />, id: 4, label: 'Dataflow users list', updates: 0, url: '' }
];
