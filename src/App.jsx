/** @jsxImportSource @emotion/react */
import { Main } from './views/main';
import { Login } from './views/login';
// import { css } from '@emotion/react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { SignIn } from './views/sign-in';
import { SignUp } from './views/sign-up';

export const App = () => {
  const location = useLocation();
  return (
    <Routes location={location}>
      <Route path='/' element={<Main />}></Route>
      <Route path='/login' element={<Login />}></Route>
      <Route path='/signUp' element={<SignUp />}></Route>
      <Route path='/signIn' element={<SignIn />}></Route>
    </Routes>
  );
};

export default App;
