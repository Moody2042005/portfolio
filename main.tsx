import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App_2.tsx';
import './index_2.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
