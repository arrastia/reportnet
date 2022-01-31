import { AnimationEvent, FC, KeyboardEvent, ReactElement, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './Modal.styles';

import { Dialog } from './_components/Dialog/Dialog';

import { useLayoutFilter } from 'ui/_tools/Hooks/useLayoutFilter';

interface ModalProps {
  animation: 'door' | 'fade' | 'flip' | 'rotate' | 'slideDown' | 'slideLeft' | 'slideRight' | 'slideUp' | 'zoom';
  cancelLabel: string;
  className: string;
  closeMaskOnClick: boolean;
  closeOnEsc: boolean;
  confirmButtonType: 'delete' | 'primary' | 'secondary' | 'transparent';
  confirmLabel: string;
  customMaskStyles: {};
  customStyles: {};
  duration: number;
  enterAnimation: string;
  height: number;
  isDisabled: boolean;
  leaveAnimation: string;
  leftSideFooter: ReactNode | ReactElement;
  measure: string;
  modalTitle: string;
  onAnimationEnd: () => void;
  onClose: (event?: KeyboardEvent) => void;
  onConfirm: () => void;
  showCloseButton: boolean;
  showMask: boolean;
  visible: boolean;
  width: number;
}

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal: FC<ModalProps> = ({
  animation,
  cancelLabel,
  children,
  className,
  closeMaskOnClick,
  closeOnEsc,
  confirmButtonType,
  confirmLabel,
  customMaskStyles,
  customStyles,
  duration,
  enterAnimation,
  height,
  isDisabled,
  leaveAnimation,
  leftSideFooter,
  measure,
  modalTitle,
  onAnimationEnd,
  onClose,
  onConfirm,
  showCloseButton,
  showMask,
  visible,
  width
}) => {
  const [animationType, setAnimationType] = useState<'enter' | 'leave'>('leave');
  const [isVisible, setIsVisible] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  const setIsEnabled = useLayoutFilter();

  useEffect(() => {
    visible ? enter() : leave();
  }, [visible]);

  const animationEnd = (event: AnimationEvent) => {
    if (animationType === 'leave') {
      setIsVisible(false);
    } else if (closeOnEsc) {
      modalRef.current?.focus();
    }

    if (event.target === modalRef.current && onAnimationEnd) onAnimationEnd();
  };

  const enter = () => {
    setIsVisible(true);
    setAnimationType('enter');
    setIsEnabled(true);
  };

  const leave = () => {
    // setIsVisible(false); NO ANIMATION
    setAnimationType('leave');
    setIsEnabled(false);
  };

  const onKeyUp = (event: KeyboardEvent) => {
    if (!closeOnEsc || event.key !== 'Escape') return;

    onClose(event);
  };

  const onMaskClick = () => {
    if (!closeMaskOnClick) return;

    onClose();
  };

  const renderMask = () => (showMask ? <Styles.Mask onClick={onMaskClick} style={customMaskStyles} /> : null);

  const style = { animationDuration: duration + 'ms', display: isVisible ? '' : 'none', WebkitAnimationDuration: duration + 'ms' };

  const renderModal = () =>
    isVisible && (
      <Styles.Modal
        animationType={animationType}
        className={`fade-${animationType} ${className}`}
        onAnimationEnd={animationEnd}
        onKeyUp={onKeyUp}
        ref={modalRef}
        style={style}
        tabIndex={-1}>
        {renderMask()}
        <Dialog
          animation={animation}
          animationType={animationType}
          cancelLabel={cancelLabel}
          confirmButtonType={confirmButtonType}
          confirmLabel={confirmLabel}
          customStyles={customStyles}
          duration={duration}
          enterAnimation={enterAnimation}
          height={height}
          isDisabled={isDisabled}
          leaveAnimation={leaveAnimation}
          leftSideFooter={leftSideFooter}
          measure={measure}
          modalTitle={modalTitle}
          onClose={onClose}
          onConfirm={onConfirm}
          showCloseButton={showCloseButton}
          width={width}>
          {children}
        </Dialog>
      </Styles.Modal>
    );

  return createPortal(renderModal(), modalsPortal);
};
