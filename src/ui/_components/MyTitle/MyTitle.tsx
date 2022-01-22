import { FC, Fragment, useRef } from 'react';

import { Styles } from './MyTitle.styles';

import { Button } from '../Button';

import { useDimensions } from 'ui/_tools/Hooks/useDimensions';
import { useOnScreen } from 'ui/_tools/Hooks/useOnScreen';

import type { IButton } from 'ui/@types/Button';

type Position = 'CENTER' | 'LEFT' | 'RIGHT';

interface MyTitleProps {
  colors?: { degrees: number; firstColor: string; secondColor: string };
  isLargeTitle?: boolean;
  isShrunk?: boolean;
  leftButtons?: IButton[];
  position?: Position;
  rightButtons?: IButton[];
  subtitle?: string;
  title: string;
}

export const MyTitle: FC<MyTitleProps> = ({ colors, isLargeTitle, isShrunk, leftButtons, position, rightButtons, subtitle, title }) => {
  const largeTitleRef = useRef<HTMLHeadingElement>(document.createElement('h1'));
  const titleContainerRef = useRef<HTMLDivElement>(document.createElement('div'));

  const dimensions = useDimensions<HTMLDivElement>(titleContainerRef);
  const isVisible = useOnScreen<HTMLHeadingElement>(largeTitleRef, `-200px`);

  const renderButtons = (buttons?: IButton[]) => (
    <Styles.ButtonWrapper>
      {buttons?.map(button => (
        <Button icon={button.icon} key={button.label} label={button.label} onClick={button.onClick} />
      ))}
    </Styles.ButtonWrapper>
  );

  return (
    <Fragment>
      <Styles.TitleWrapper isVisible={isVisible} ref={titleContainerRef}>
        {renderButtons(leftButtons)}
        <Styles.Title colors={colors} isVisible={isVisible}>
          {title}
        </Styles.Title>
        {renderButtons(rightButtons)}
      </Styles.TitleWrapper>

      {isLargeTitle ? (
        <Styles.LargeTitle colors={colors} isVisible={isVisible} ref={largeTitleRef}>
          {title}
        </Styles.LargeTitle>
      ) : null}
    </Fragment>
  );
};

MyTitle.defaultProps = {
  colors: { degrees: 0, firstColor: 'black', secondColor: 'black' },
  leftButtons: [],
  position: 'CENTER',
  rightButtons: []
};
