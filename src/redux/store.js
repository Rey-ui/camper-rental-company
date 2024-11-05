import { configureStore } from "@reduxjs/toolkit";
import advertsReducer from "./slice.js";
import { favoriteReducer } from "./favorites/slice.js";

// import { advertsReducer } from './camper/slice';
// import { filterReducer } from './filter/slice';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";
import { filterReducer } from "./filter/slice.js";
//import { favoriteReducer } from './favorite/slice';

const favoritePersistConfig = {
  key: "favorites",
  storage,
  whitelist: ["favorites"],
};

const store = configureStore({
  reducer: {
    catalog: advertsReducer,
    filter: filterReducer,
    favorites: persistReducer(favoritePersistConfig, favoriteReducer),
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
});

const persistor = persistStore(store);

export { store, persistor };
