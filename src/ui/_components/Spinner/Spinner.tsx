import { FC, Fragment } from 'react';

import { Styles } from './Spinner.styles';

import { MARGIN, SIZE, SPEED_MULTIPLIER } from 'configuration/constants/spinner.constants';

import { SpinnerProps } from './@types/Spinner.types';

export const Spinner: FC<SpinnerProps> = ({ className, color, margin, size, type }) => {
  function parseLengthAndUnit(size: number) {
    return { value: size, unit: 'px' };
  }

  function cssValue(value: number) {
    const lengthWithUnit = parseLengthAndUnit(value);

    return `${lengthWithUnit.value}${lengthWithUnit.unit}`;
  }

  const renderStyles = ({ index }: { index: number }) => ({
    animationDuration: `${0.6 / SPEED_MULTIPLIER}s`,
    animationDelay: `${index * 0.07}s`,
    backgroundColor: color,
    height: cssValue(size || SIZE),
    margin: cssValue(margin || MARGIN),
    width: cssValue(size || SIZE)
  });

  const renderCLipStyles = {
    animationDuration: `${0.75 / SPEED_MULTIPLIER}s`,
    WebkitAnimationDuration: `${0.75 / SPEED_MULTIPLIER}s`,
    borderColor: color,
    height: cssValue(size || SIZE),
    width: cssValue(size || SIZE)
  };

  const renderClipSpinner = () => <Styles.ClipSpinner style={renderCLipStyles} />;

  const renderSyncLoader = () => (
    <Fragment>
      <Styles.SyncLoader style={renderStyles({ index: 1 })} />
      <Styles.SyncLoader style={renderStyles({ index: 2 })} />
      <Styles.SyncLoader style={renderStyles({ index: 3 })} />
    </Fragment>
  );

  const renderSpinner = () => {
    switch (type) {
      case 'CLIP_LOADER':
        return renderClipSpinner();

      case 'SYNC_LOADER':
        return renderSyncLoader();

      default:
        throw new Error('The spinner type is not correct.');
    }
  };

  return <Styles.Spinner className={className}>{renderSpinner()}</Styles.Spinner>;
};

Spinner.defaultProps = { color: 'blue', type: 'SYNC_LOADER' };
