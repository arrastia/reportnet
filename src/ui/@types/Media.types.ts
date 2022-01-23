import { ReactElement } from 'react';
import { IconType } from 'react-icons';

export type Config = {
  readonly [key: string]: number;
};

export type Breakpoint<C extends Config> = {
  breakpoint: keyof C;
  maxWidth?: number | null;
  minWidth: C[keyof C];
};

export type MediaQuery<C extends Config> = {
  breakpoint: keyof C;
  maxWidth: number | null;
  minWidth: C[keyof C];
  query: string;
};

export type Size = { height: string; width: string };

export type Unit = 'px' | 'vmin' | 'rem' | 'vh' | 'vw';

export type Icon = IconType | ReactElement;
