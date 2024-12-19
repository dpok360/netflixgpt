import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants/constants';
import { useEffect } from 'react';
import { addNowPlayingMovies } from '../utils/redux/slice/moviesSlice';

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();

  const getLatestMOviesList = async () => {
    const data = await fetch(
      'https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',
      API_OPTION
    );
    const json = await data.json();
    dispatch(addNowPlayingMovies(json.results));
  };
  useEffect(() => {
    getLatestMOviesList();
  }, []);
};

export default useNowPlayingMovies;
