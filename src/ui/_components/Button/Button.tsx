import { FC } from 'react';

import { Styles } from './Button.styles';

import { IButton } from './@types/Button.types';

export const Button: FC<IButton> = ({ className, icon, isDisabled, label, onClick, style, type, iconSize, ...rest }) => {
  const onButtonClick = () => {
    if (isDisabled || !onClick) return;

    onClick();
  };

  const renderIcon = () => (icon ? <Styles.Icon iconSize={iconSize}>{icon}</Styles.Icon> : null);

  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : null);

  return (
    <Styles.Button className={`${className} ${type} ${isDisabled ? 'disabled' : ''}`} onClick={onButtonClick} style={style} {...rest}>
      {renderIcon()}
      {renderLabel()}
    </Styles.Button>
  );
};

Button.defaultProps = {
  className: '',
  icon: null,
  isDisabled: false,
  label: '',
  onClick: () => {},
  style: {},
  type: 'secondary'
};
