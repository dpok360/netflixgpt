import Header from '../components/Header';
import LoginForm from '../components/LoginForm';
import { NETFLIX_BG_IMAGE } from '../utils/constants/constants';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute"
          src={NETFLIX_BG_IMAGE}
          alt="Login page background image"
        />
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
