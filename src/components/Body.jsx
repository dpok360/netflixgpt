import { createBrowserRouter, RouterProvider } from 'react-router-dom';
//import { useEffect } from 'react';
//import { getLoggedInUser } from '../utils/auth/authentication';
//import { useDispatch } from 'react-redux';
//import { addUser, removeUser } from '../utils/redux/slice/userSlice';
import LoginPage from '../pages/LoginPage';
import BrowsePage from '../pages/BrowsePage';

const Body = () => {
  const appRouter = createBrowserRouter([
    { path: '/', element: <LoginPage /> },
    { path: '/browse', element: <BrowsePage /> },
  ]);

  return (
    <div>
      <RouterProvider router={appRouter} />
    </div>
  );
};

export default Body;
