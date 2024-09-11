// importacoes
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
// bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
// icones bootstrap
import 'bootstrap-icons/font/bootstrap-icons.min.css';
// css
import './sass/index.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
