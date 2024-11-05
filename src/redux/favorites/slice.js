import { createSlice } from "@reduxjs/toolkit";
//import { fetchAdvertsThunk } from "./operations";

const favoritesSlice = createSlice({
  name: "favorites",
  initialState: {
    favorites: [],
  },
  reducers: {
    addFavorite: (state, action) => {
      const camper = action.payload;
      const exists = state.favorites.some((item) => item._id === camper._id);
      if (!exists) {
        state.favorites.push(camper);
      }
    },
    removeFavorite: (state, action) => {
      const camperId = action.payload;
      state.favorites = state.favorites.filter(
        (camper) => camper._id !== camperId
      );
    },
  },
  // extraReducers: (builder) => {
  //   builder.addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
  //     const { campers } = action.payload;

  //     const existingIds = new Set(state.campers.map((item) => item._id));
  //     const uniqueItems = campers.filter((item) => !existingIds.has(item._id));

  //     state.campers = [...state.campers, ...uniqueItems];
  //     state.hasMore = campers.length === state.pageSize;
  //     //state.campers = action.payload;
  //   });
  // .addCase(fetchAdvertDetailsThunk.fulfilled, (state, action) => {
  //   state.advertDetails = action.payload;
  //   state.status = 'succeeded';
  // })
  // .addCase(addToFavoritesThunk.fulfilled, (state, action) => {
  //   state.favorites.push(action.payload);
  //   state.status = 'succeeded';
  // })
  // .addCase(removeFromFavoritesThunk.fulfilled, (state, action) => {
  //   state.favorites = state.favorites.filter(fav => fav.id !== action.payload.id);
  //   state.status = 'succeeded';
  // })
  // .addMatcher(
  //   action => action.type.endsWith('/pending'),
  //   (state) => {
  //     state.status = 'loading';
  //   }
  // )
  // .addMatcher(
  //   action => action.type.endsWith('/rejected'),
  //   (state, action) => {
  //     state.status = 'failed';
  //     state.error = action.error.message;
  //   }
  // );
  // },
});

export const { addFavorite, removeFavorite } = favoritesSlice.actions;
export const favoriteReducer = favoritesSlice.reducer;
