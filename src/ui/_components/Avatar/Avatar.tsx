import { FC } from 'react';

import { Styles } from './Avatar.styles';

import { AvatarProps } from './@types/Avatar.types';

export const Avatar: FC<AvatarProps> = ({ className, bgColor, emoji, initials, onClick, size, sticker, type, url, style }) => {
  const renderAvatar = () => {
    switch (type) {
      case 'EMOJI':
        return (
          <Styles.EmojiAvatar className={className} onClick={onClick} size={size} style={style}>
            {emoji}
          </Styles.EmojiAvatar>
        );

      case 'INITIALS':
        return (
          <Styles.InitialsAvatar onClick={onClick} size={size}>
            {initials}
          </Styles.InitialsAvatar>
        );

      case 'PHOTO':
        return <Styles.PhotoAvatar onClick={onClick} size={size} src={url} />;

      case 'STICKER':
        return (
          <Styles.StickerAvatar onClick={onClick} size={size}>
            {sticker}
          </Styles.StickerAvatar>
        );

      default:
        throw new Error('The avatar type is not correct.');
    }
  };

  return renderAvatar();
};
