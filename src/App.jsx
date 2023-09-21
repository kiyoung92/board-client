/** @jsxImportSource @emotion/react */
import { Main } from './views/main';
import { Login } from './views/login';
// import { css } from '@emotion/react';
import { Routes, Route } from 'react-router-dom';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="/login" element={<Login />}></Route>
    </Routes>
  );
};

export default App;
