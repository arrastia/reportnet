import './App.css';

import { reactLogo } from 'assets/images';

export const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img alt="logo" className="App-logo" src={reactLogo} />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          Learn React
        </a>
      </header>
    </div>
  );
};
