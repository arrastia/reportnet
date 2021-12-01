import { CSSProperties, MouseEvent, ReactNode } from 'react';
import { IconType } from 'react-icons';

export type ButtonType = 'delete' | 'glass' | 'primary' | 'secondary' | 'transparent';

export interface IButton {
  animation?: string;
  className?: string;
  icon?: IconType | ReactNode;
  iconSize?: number;
  isDisabled?: boolean;
  label?: string;
  onClick?: () => void;
  onMouseDown?: (event: MouseEvent<HTMLButtonElement>) => void;
  style?: CSSProperties;
  type?: ButtonType;
}
