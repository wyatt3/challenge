import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import Microroute from './router.js';

const root = ReactDOM.createRoot(document.getElementById('root'));

let render = () => {
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
};

let api = {
  router: new Microroute({ render }),
};

render();

export default api;
