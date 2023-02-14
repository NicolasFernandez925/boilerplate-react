import type { IUserProps } from './interface';

import './App.css';

function App({ user }: IUserProps): JSX.Element {
  return (
    <div className="App">
      <a href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
        learn react
      </a>

      <header className="App-header">
        <p>{user.age}</p>
        <p>{user.name}</p>
      </header>
    </div>
  );
}

export default App;
