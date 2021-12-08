import { FC, Fragment } from 'react';

import { Styles } from './Title.styles';

import TitleProps, { TitleButtonProps } from './@types/Title.types';

import { Button } from 'ui/_components/Button';

export const Title: FC<TitleProps> = ({ animations, bgColor, isLargeTitle, isShrunk, leftButtons, rightButtons, title }) => {
  const renderButtons = (buttons: TitleButtonProps[]) => (
    <Styles.ButtonWrapper>
      {buttons.map(button => (
        <Button icon={button.icon} key={button.id} label={button.label} onClick={button.onClick} />
      ))}
    </Styles.ButtonWrapper>
  );

  return (
    <Fragment>
      <Styles.TitleWrapper className={animations} isLargeTitle={isLargeTitle} isShrunk={isShrunk}>
        {renderButtons(leftButtons)}
        <Styles.Title bgColor={bgColor} isLargeTitle={isLargeTitle} isShrunk={isShrunk}>
          {title}
        </Styles.Title>
        {renderButtons(rightButtons)}
      </Styles.TitleWrapper>

      {isLargeTitle ? (
        <Styles.LargeTitle className={animations} isShrunk={isShrunk} bgColor={bgColor}>
          {title}
        </Styles.LargeTitle>
      ) : null}
    </Fragment>
  );
};
