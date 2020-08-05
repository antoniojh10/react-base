import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

function render() {
  ReactDOM.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
    document.getElementById('app'),
  );
}

render();

if (module.hot) {
  module.hot.accept('./components/App', () => {
    render();
  });
}
