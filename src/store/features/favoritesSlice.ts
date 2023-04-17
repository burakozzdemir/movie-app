import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Movie } from "../../types/movie";
import { RootState } from "../store";

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: [],
};

export const favoritesSlice = createSlice({
  name: "favorites",
  initialState,
  reducers: {
    addFavorite: (state, action: PayloadAction<Movie>) => {
      state.favorites.push(action.payload);
    },
    removeFavorite: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (movie) => movie.id !== action.payload
      );
    },
  },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;

//Selectors
export const selectFavorites = (state: RootState) => state.favorites.favorites;

export default favoritesSlice.reducer;
