import { StrictMode, Suspense } from 'react';
import { render } from 'react-dom';
import { RecoilRoot, SetRecoilState } from 'recoil';

import { App } from './App';

import { Spinner } from 'ui/_components/Spinner';

import { themeStore } from 'ui/_tools/Atoms/UserStore';

import reportWebVitals from './reportWebVitals';

function initializeThemeStore({ set }: { set: SetRecoilState }) {
  const localStorageValue = window.localStorage.getItem('dark-mode-enabled') || 'false';
  const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)') || 'false';

  const enabled = JSON.parse(localStorageValue) ?? prefersDarkMode;

  set(themeStore, enabled);
}

render(
  <StrictMode>
    <RecoilRoot initializeState={initializeThemeStore}>
      <Suspense fallback={<Spinner />}>
        <App />
      </Suspense>
    </RecoilRoot>
  </StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
