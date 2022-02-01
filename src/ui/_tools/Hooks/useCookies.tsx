import { CookiesUtils } from 'ui/_tools/Utils/CookiesUtils';

import type { CookieValue, SetCookieValue } from 'ui/@types/Cookie';

const { getCookie, setCookie } = CookiesUtils;

export const useCookies = (name: string): [CookieValue, SetCookieValue] => [getCookie(name), setCookie];

export const useCookieValue = (name: string): CookieValue => getCookie(name);

export const useSetCookie = (): SetCookieValue => setCookie;
