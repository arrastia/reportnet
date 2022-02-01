import { Dispatch, SetStateAction, useEffect, useState } from 'react';

const root = document.getElementById('root') as HTMLElement;

export const useLayoutFilter = (): Dispatch<SetStateAction<boolean>> => {
  const [isEnabled, setIsEnabled] = useState(false);

  useEffect(() => {
    const className = 'filter-layout';

    isEnabled ? root.classList.add(className) : root.classList.remove(className);
  }, [isEnabled]);

  return setIsEnabled;
};
