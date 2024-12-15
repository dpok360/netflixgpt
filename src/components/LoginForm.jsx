import { useState } from 'react';

const LoginForm = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleSignForm = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <form className="fixed flex flex-col text-white bg-darkBlack bg-opacity-95  w-3/12 my-36 mx-auto right-0 left-0 z-50 rounded-lg">
        <h1 className="font-inte p-2 mt-8 mx-8 text-3xl font-bold">
          {isSignInForm ? 'Sign Up' : 'Sign In'}
        </h1>

        {!isSignInForm && (
          <input
            className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
            type="text"
            placeholder="Full Name"
          />
        )}
        <input
          className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="text"
          placeholder="Email address"
        />
        <input
          className="font-inter p-4 mt-10 mx-10 rounded-sm border-[0.5px] border-gray-200  bg-black placeholder-gray-400 placeholder:text-sm focus:outline-none focus:ring-1 focus:ring-white"
          type="password"
          placeholder="Password"
        />
        <button className="font-inter p-4 mx-10 mt-12 mb-14  bg-red-600 rounded-md hover:bg-red-700">
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
