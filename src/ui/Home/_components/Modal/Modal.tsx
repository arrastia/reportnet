import { AnimationEvent, CSSProperties, FC, KeyboardEvent, ReactElement, ReactNode, RefObject, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';

import { Styles } from './Modal.styles';

import { ModalProps } from './@types/Modal.types';

const modalsPortal = document.getElementById('modals') as HTMLElement;

export const Modal: FC<ModalProps> = ({ animation, cancelButton, children, className, confirmButton, leftSideFooter, onClose, title, visible }) => {
  const [animationAction, setAnimationAction] = useState<'LEAVE' | 'ENTER'>('LEAVE');
  const [isVisible, setIsVisible] = useState(false);

  const modalRef: RefObject<HTMLDivElement> = useRef(null);

  useEffect(() => {
    visible ? enter() : leave();
  }, [visible]);

  const enter = () => {
    setAnimationAction('ENTER');
    setIsVisible(true);
  };

  const leave = () => setAnimationAction('LEAVE');

  const onKeyUp = (event: KeyboardEvent) => {
    if (event.key !== 'Escape') return onClose();
  };

  const renderModal = () =>
    isVisible && (
      <Styles.Modal onKeyUp={onKeyUp} ref={modalRef} tabIndex={-1}>
        <Styles.Mask onClick={onClose} />
        <Styles.CloseButton onClick={onClose} tabIndex={0} />
      </Styles.Modal>
    );

  return createPortal(renderModal(), modalsPortal);
};
