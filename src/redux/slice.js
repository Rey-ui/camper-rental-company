import { createSlice } from "@reduxjs/toolkit";
import { fetchAdvertsThunk } from "./operations";

const advertsSlice = createSlice({
  name: "catalog",
  initialState: {
    campers: [],
    loading: false,
    error: null,
    hasMore: true,
    pageSize: 4,
  },
  reducers: {
    setHasMore(state, action) {
      state.hasMore = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdvertsThunk.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAdvertsThunk.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        const { campers } = action.payload;
        const existingIds = new Set(state.campers.map((item) => item._id));
        const uniqueItems = campers.filter(
          (item) => !existingIds.has(item._id)
        );

        state.campers = [...state.campers, ...uniqueItems];
        state.hasMore = campers.length === state.pageSize;
        //state.campers = action.payload;
      })
      .addCase(fetchAdvertsThunk.rejected, (state, action) => {
        state.error = action.error.message;
        state.loading = false;
      });
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
  },
});

export const { setHasMore } = advertsSlice.actions;
export default advertsSlice.reducer;
