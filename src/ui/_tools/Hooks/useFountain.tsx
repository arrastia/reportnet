import { useEffect } from 'react';

import { Fountain } from 'ui/_components/Fountain';

export const useFountain = (isAnimated: boolean = true) => {
  useEffect(() => {
    isAnimated && new Fountain();
  }, [isAnimated]);
};
