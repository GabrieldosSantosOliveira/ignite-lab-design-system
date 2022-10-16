import { Route, Routes } from 'react-router-dom';

import { Home } from './pages/Home';
import { Menu } from './pages/Menu';
import { Register } from './pages/Register';
import { SingIn } from './pages/SingIn';
import { Update } from './pages/Update';
export const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/SingIn" element={<SingIn />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/Menu" element={<Menu />} />
      <Route path="/Update/:id" element={<Update />} />
      <Route path="*" element={<Home />} />
    </Routes>
  );
};
