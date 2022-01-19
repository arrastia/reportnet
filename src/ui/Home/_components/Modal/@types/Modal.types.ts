import type { ReactElement, ReactNode } from 'react';

import type { AnimationType } from 'ui/@types/Styles.types';
import type { IButton } from 'ui/@types/Button';

export interface ModalProps {
  animation?: AnimationType;
  cancelButton?: IButton;
  className?: string;
  confirmButton?: IButton;
  leftSideFooter?: ReactNode | ReactElement;
  onClose: () => void;
  title: string;
  visible: boolean;
}
