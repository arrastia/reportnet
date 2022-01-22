import styled from 'styled-components';

import { Avatar } from 'ui/_styles/components/Avatar';

const EmojiAvatar = styled(Avatar).attrs({ bgColor: 'lightblue' })``;

const InitialsAvatar = styled(Avatar).attrs({ bgColor: 'lightgreen' })``;

const PhotoAvatar = styled('img')<{ size?: { height: string; width: string } }>`
  align-self: center;
  border-radius: 50%;
  cursor: pointer;
  height: ${({ size }) => (size?.height ? size.height : '20vmin')};
  transition: transform 0.1s ease-in;
  user-select: none;
  width: ${({ size }) => (size?.width ? size.width : '20vmin')};

  &:active {
    transform: scale(0.9);
    transition: transform 0.1s ease-in;
  }
`;

const StickerAvatar = styled(Avatar).attrs({ bgColor: 'purple' })``;

export const Styles = { EmojiAvatar, InitialsAvatar, PhotoAvatar, StickerAvatar };
