export type CookieValue = string | undefined;
export type SetCookieValue = ({ name, path, value }: ICookie) => void;

export interface ICookie {
  name: string;
  path?: string;
  value: CookieValue;
}
