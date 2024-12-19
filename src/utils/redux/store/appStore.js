import { configureStore } from '@reduxjs/toolkit';
import userReducer from '../slice/userSlice';
import moviesreducer from '../slice/moviesSlice';

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesreducer,
  },
});
export default appStore;
