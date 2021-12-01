import { Styles } from './ThemeButton.styles';

import { useDarkMode } from 'ui/_tools/Hooks/useDarkMode';

export const ThemeButton = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();

  const onToggleTheme = () => setIsDarkMode(!isDarkMode);

  return (
    <Styles.ThemeButton onClick={onToggleTheme}>
      <div className={`item-1 ${isDarkMode ? 'sun' : 'moon'}_item-1`}></div>
      <div className={`item-2 ${isDarkMode ? 'sun' : 'moon'}_item-2`}></div>
    </Styles.ThemeButton>
  );
};
