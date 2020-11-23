import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import './index.css';
import './c3chart.css';
import './paginate.css';

const rootElement = document.getElementById("root");

if (rootElement) {
  ReactDOM.render(<App />, rootElement);
} else {
  throw new Error("Could not find root element to mount to!");
}