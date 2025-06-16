import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import AdminApp from "./AdminApp";
import reportWebVitals from './reportWebVitals';
import { CategoryProvider } from "./constants";
import { Provider } from 'react-redux';
import { store } from './store/store';
import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <CategoryProvider>
          <Router>
            <App />
          </Router>
      </CategoryProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
