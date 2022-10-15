import './styles/global.css';
import { BrowserRouter } from 'react-router-dom';

import { MainRoutes as Routes } from './routes';

function App() {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export { App };
