import { useNavigate } from 'react-router-dom';
import Header from '../components/Header';
import { logoutAccount } from '../utils/auth/authentication';
import { useDispatch } from 'react-redux';
import { removeUser } from '../utils/redux/slice/userSlice';
import { USER_LOGO } from '../utils/constants/constants';
import useNowPlayingMovies from '../hooks/useNowPlayingMovies';
import MainContainer from '../components/MainContainer';
import SecondaryContainer from '../components/SecondaryContainer';

const BrowsePage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useNowPlayingMovies();
  const handleSignOut = async () => {
    const user = await logoutAccount();
    if (user) {
      dispatch(removeUser());
      navigate('/');
    } else {
      console.error('Error logging out');
    }
  };

  return (
    // <div className="bg-gradient-to-t from-black to bg-gray-800">
    //   <div className="flex justify-between z-50">
    //     <Header />
    //     <div className="flex mx-16 my-12 ">
    //       <img
    //         className="w-12 h-12 rounded-md"
    //         src={USER_LOGO}
    //         alt="netflix user icon"
    //       />
    //       <button
    //         onClick={handleSignOut}
    //         className="font-extralight m-1 px-2 pt-6 text-gray-400 rounded-xl underline active:text-gray-200"
    //       >
    //         Sign Out
    //       </button>
    //     </div>
    //   </div>
    //   <MainContainer />
    //   <SecondaryContainer />
    // </div>

    <div className="relative bg-gradient-to-t from-black to bg-gray-800">
      <div className="absolute top-0 left-0 w-full z-50 flex justify-between p-4">
        <Header />
        <div className="flex items-center space-x-4">
          <img
            className="w-12 h-12 rounded-md"
            src={USER_LOGO}
            alt="netflix user icon"
          />
          <button
            onClick={handleSignOut}
            className="font-extralight px-2 text-gray-400 rounded-xl underline active:text-gray-200"
          >
            Sign Out
          </button>
        </div>
      </div>

      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default BrowsePage;
