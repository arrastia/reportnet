import { Dispatch, SetStateAction, useEffect } from 'react';
import { useSetRecoilState } from 'recoil';

import { themeStore } from '../Atoms/UserStore';

import { useLocalStorage } from './useLocalStorage';
import { useMedia } from './useMedia';

type ReturnType = [boolean, Dispatch<SetStateAction<boolean>>];

export const useDarkMode = (): ReturnType => {
  const setTheme = useSetRecoilState(themeStore);

  const [enabledState, setEnabledState] = useLocalStorage<boolean>('dark-mode-enabled', false);

  const prefersDarkMode = usePrefersDarkMode();

  const enabled = enabledState ?? prefersDarkMode;

  useEffect(() => {
    const className = 'dark-mode';
    const element = window.document.body;

    setTheme(enabled);
    enabled ? element.classList.add(className) : element.classList.remove(className);
  }, [enabled]);

  return [enabled, setEnabledState];
};

function usePrefersDarkMode() {
  return useMedia<boolean>(['(prefers-color-scheme: dark)'], [true], false);
}
