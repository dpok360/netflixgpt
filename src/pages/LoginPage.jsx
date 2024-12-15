import Header from '../components/Header';
import LoginForm from '../components/LoginForm';

const LoginPage = () => {
  return (
    <div>
      <Header />
      <div>
        <LoginForm />
        <img
          className="absolute"
          src="
          https://assets.nflxext.com/ffe/siteui/vlv3/729ce5c2-d831-436a-8c9d-f38fea0b99b3/web/NP-en-20241209-TRIFECTA-perspective_690e613d-0caf-4a64-b410-bd39373ca42d_medium.jpg"
          alt="Login page background image"
        />
      </div>
    </div>
  );
};

export default LoginPage;
