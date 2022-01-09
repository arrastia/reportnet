import { atom } from 'recoil';

import { messages } from 'configuration/languages';

export const messagesStore = atom({
  key: 'messagesStore',
  default: messages
});

export const languagesStore = atom({
  key: 'languagesStore',
  default: 'en'
});
