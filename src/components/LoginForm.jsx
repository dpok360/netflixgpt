import { useRef, useState } from 'react';
import { checkValidData } from '../utils/validation/validate';
import { signIn, signUp } from '../utils/auth/authentication';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addUser } from '../utils/redux/slice/userSlice';

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  const [isValidationErrorMessage, setIsValidationErrorMessage] = useState('');
  const [isLoggedInUser, setIsLoggedInUser] = useState(null);
  const [message, setMessage] = useState('');

  const dispacth = useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const navigate = useNavigate();

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  const handleButtonclick = async () => {
    const userEmail = email.current?.value;
    const userPassword = password.current?.value;
    const userName = name.current?.value;

    const message = checkValidData(email.current.value, password.current.value);
    setIsValidationErrorMessage(message);
    if (message) return;

    try {
      if (isSignInForm) {
        const singnedInUser = await signIn(userEmail, userPassword);
        if (singnedInUser) {
          const { $id, name, email } = singnedInUser;

          email;
          dispacth(
            addUser({
              $id,
              name,
              email,
            })
          );
          setIsLoggedInUser(singnedInUser);
          setMessage('Logging successfull!');
          navigate('/browse');
        }
      } else {
        const signUpUser = await signUp(userName, userEmail, userPassword);
        if (!isSignInForm) {
          const { $id, name, email } = signUpUser;
          dispacth(
            addUser({
              $id,
              name,
              email,
            })
          );
          setIsLoggedInUser(signUpUser);
          setMessage('User singed up successfully!');
          navigate('/browse');
        }
      }
    } catch (error) {
      console.log('Error signing in', error.message);
      setMessage('Error logging in!');
      throw new Error('Error signing in');
    }
  };

  return (
    <div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="fixed flex flex-col text-white bg-darkBlack bg-opacity-95  w-3/12 my-36 mx-auto right-0 left-0 z-50 rounded-lg"
      >
        <h1 className="font-inte p-2 mt-8 mx-8 text-3xl font-bold">
          {isSignInForm ? 'Sign In' : 'Sign Up'}
        </h1>

        {!isSignInForm && (
          <input
            ref={name}
            className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          ref={email}
          className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Email address"
        />
        <input
          ref={password}
          className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          placeholder="Password"
        />
        <p className="text-sm font-Inter text-red-500  p-2 mt-4 mx-8">
          {isValidationErrorMessage}
        </p>
        <p className="text-sm font-Inter text-red-500  p-2 mt-4 mx-8">
          {isLoggedInUser && { message }}
        </p>
        <button
          onClick={handleButtonclick}
          className="font-inter p-4 mx-10 mt-12 mb-14  bg-red-600 rounded-md hover:bg-red-700"
        >
          {isSignInForm ? 'Sign In ' : 'Sign Up'}
        </button>
        <p
          onClick={toggleSignForm}
          className="font-Inter  mx-auto mt-2 mb-24 text-gray-400 cursor-pointer"
        >
          New to Netflix?{' '}
          <span className="font-Inter font-bold text-white">
            {isSignInForm ? 'Sign Up now' : 'Sign In'}
          </span>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
