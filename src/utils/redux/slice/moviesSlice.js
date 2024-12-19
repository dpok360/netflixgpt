import { createSlice } from '@reduxjs/toolkit';

const moviesSlice = createSlice({
  name: 'movies',
  initialState: { nowPlayingMovies: null, trailerVideos: [] },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideos = action.payload;
    },
  },
});
export default moviesSlice.reducer;
export const { addNowPlayingMovies, addTrailerVideo } = moviesSlice.actions;
