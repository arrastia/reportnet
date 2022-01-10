import { TOKEN_EXPIRATION_TIME } from 'configuration/constants/authentication.constants';

import type { ICookie } from 'ui/@types/Cookie';

const getCookie = (name: string) => {
  return decodeURIComponent(document.cookie)
    .split('; ')
    .find(row => row.startsWith(`${name}=`))
    ?.split('=')[1];
};

const setCookie = ({ name, path, value }: ICookie) => {
  const cookie = `${name}=${value};path=${path};max-age=${TOKEN_EXPIRATION_TIME};secure`;
  document.cookie = cookie;
};

export const CookiesUtils = { getCookie, setCookie };
