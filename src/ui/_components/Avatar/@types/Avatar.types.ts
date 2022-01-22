import { CSSProperties } from 'react';

type AvatarType = 'STICKER' | 'EMOJI' | 'PHOTO' | 'INITIALS';

export interface AvatarProps {
  bgColor?: string;
  className?: string;
  content?: any;
  emoji?: string;
  initials?: string;
  onClick?: () => void;
  size?: { height: string; width: string };
  sticker?: any;
  type: AvatarType;
  url?: string;
  style?: CSSProperties;
}
