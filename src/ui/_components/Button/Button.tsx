import { FC, Fragment } from 'react';

import { Styles } from './Button.styles';

import { Spinner } from '../Spinner';

import type { IButton } from 'ui/@types/Button';

export const Button: FC<IButton> = ({ className, icon, iconSize, isDisabled, isLoading, label, onClick, style, type, ...rest }) => {
  const onButtonClick = () => {
    if (isDisabled || !onClick) return;

    onClick();
  };

  const renderIcon = () => (icon ? <Styles.Icon iconSize={iconSize}>{icon}</Styles.Icon> : null);

  const renderLabel = () => (label ? <Styles.Text>{label}</Styles.Text> : null);

  const renderContent = () => {
    if (isLoading) return <Spinner color="white" margin={3} size={10} />;

    return (
      <Fragment>
        {renderIcon()}
        {renderLabel()}
      </Fragment>
    );
  };

  return (
    <Styles.Button className={`${className} ${type} ${isDisabled ? 'disabled' : ''}`} onClick={onButtonClick} style={style} {...rest}>
      {renderContent()}
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
