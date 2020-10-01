import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Rest from "./components/Map"


ReactDOM.render(
  <React.StrictMode>
      <App />
      <Rest />
  </React.StrictMode>,
  document.getElementById('root')
);
