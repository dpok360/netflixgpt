import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import BrowsePage from '../pages/BrowsePage';
import LoginPage from '../pages/LoginPage';

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
