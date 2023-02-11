import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
import { type IUser } from './interface';

import './index.css';

const user: IUser = {
  name: 'John',
  age: 30,
};

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <App user={user} />
  </React.StrictMode>
);
