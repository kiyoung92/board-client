/** @jsxImportSource @emotion/react */
import { MainHeader } from '../components/main/header';
import { MainBody } from '../components/main/body';
import { MainFooter } from '../components/main/footer';
import { Link } from 'react-router-dom';

export const Main = () => {
  return (
    <div>
      <Link to="/login">MAIN</Link>
      <MainHeader></MainHeader>
      <MainBody></MainBody>
      <MainFooter></MainFooter>
    </div>
  );
};
