import { API_OPTION, TMDB_MOVIE_BY_ID_URL } from '../constants/constants';

export const getMoviesById = async (moviesId) => {
  try {
    const URL = TMDB_MOVIE_BY_ID_URL.replace('movie_id', moviesId);
    const data = await fetch(URL, API_OPTION);
    if (!data.ok) {
      throw new Error('Failed to fetch movie videos');
    }
    const json = await data.json();
    return json;
  } catch (error) {
    console.erro('Error fetching movie video', error.message);
    return null;
  }
};
