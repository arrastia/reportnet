import { CSSProperties, FC, ReactElement, ReactNode } from 'react';

import { Styles } from './Dialog.styles';

import { Button } from 'ui/_components/Button';
// import { useBreakpoint } from 'views/_tools/Hooks/useBreakPoint';

interface DialogProps {
  animation: 'door' | 'fade' | 'flip' | 'rotate' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp' | 'zoom';
  animationType: 'enter' | 'leave';
  cancelLabel: string;
  confirmButtonType: 'delete' | 'primary' | 'secondary' | 'transparent';
  confirmLabel: string;
  customStyles?: CSSProperties;
  duration: number;
  enterAnimation: string;
  height: number;
  isDisabled: boolean;
  leaveAnimation: string;
  leftSideFooter: ReactNode | ReactElement;
  measure: string;
  modalTitle: string;
  onClose: () => void;
  onConfirm: () => void;
  showCloseButton: boolean;
  width: number;
}

export const Dialog: FC<DialogProps> = ({
  animation,
  animationType,
  cancelLabel,
  children,
  confirmButtonType,
  confirmLabel,
  customStyles,
  duration,
  enterAnimation,
  height,
  isDisabled,
  leaveAnimation,
  leftSideFooter,
  measure,
  modalTitle,
  onClose,
  onConfirm,
  showCloseButton,
  width
}) => {
  const animationClass = (animationType === 'enter' ? enterAnimation : leaveAnimation) || animation;

  // const BREAKPOINTS = { mobile: 0, tablet: 768, desktop: 1280 };

  // const { breakpoint } = useBreakpoint(BREAKPOINTS);

  const style = {
    animationDuration: `${duration}ms`,
    // height: `${height}${measure}`,
    WebkitAnimationDuration: `${duration}ms`
    // width: `${width}${measure}`
  };

  const renderFooter = () => (
    <Styles.Footer className={`${leftSideFooter ? 'leftSideFooter' : ''}`}>
      {leftSideFooter && leftSideFooter}
      <Styles.ButtonWrapper>
        {!cancelLabel && <Button label={cancelLabel} onClick={onClose} type={'transparent'} />}
        {!confirmLabel && <Button isDisabled={isDisabled} label={confirmLabel} onClick={onConfirm} type={confirmButtonType} />}
      </Styles.ButtonWrapper>
    </Styles.Footer>
  );

  return (
    <Styles.Dialog
      animation={animation}
      animationType={animationType}
      className={`${animationClass}-${animationType}`}
      style={{ ...style, ...customStyles }}>
      {showCloseButton ? <Styles.CloseButton onClick={onClose} tabIndex={0} /> : null}
      <Styles.Content>
        <Styles.Title>{modalTitle}</Styles.Title>
        {children}
      </Styles.Content>
      {renderFooter()}
    </Styles.Dialog>
  );
};
