import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getMoviesById } from '../utils/api/getMoviesById';
import { addTrailerVideo } from '../utils/redux/slice/moviesSlice';

const useMovieTrailer = (movieId) => {
  const dispacth = useDispatch();

  useEffect(() => {
    const movieDataById = async () => {
      const data = await getMoviesById(movieId);
      const filteredData = data.results.filter(
        (video) => video.type === 'Trailer'
      );
      const trailer = filteredData.length ? filteredData[0] : data.results[0];
      dispacth(addTrailerVideo(trailer));
    };
    movieDataById();
  }, []);
};

export default useMovieTrailer;
