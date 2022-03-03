import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { CustomThemeProvider } from './context/Theme';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CustomThemeProvider>
        <App />
      </CustomThemeProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);
