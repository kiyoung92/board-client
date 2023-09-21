import { LoginHeader } from '../components/login/header';
import { LoginBody } from '../components/login/body';
import { LoginFooter } from '../components/login/footer';
import { Link } from 'react-router-dom';

export const Login = () => {
  return (
    <div>
      <Link to="/">LOGIN</Link>
      <LoginHeader></LoginHeader>
      <LoginBody></LoginBody>
      <LoginFooter></LoginFooter>
    </div>
  );
};
