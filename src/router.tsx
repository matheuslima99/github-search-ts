import { Routes, Route } from 'react-router-dom';

import { Home } from './pages/Home';
import { Profile } from './pages/Profile';

export const Router = () => (
  <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/:user' element={<Profile />} />
  </Routes>
);
