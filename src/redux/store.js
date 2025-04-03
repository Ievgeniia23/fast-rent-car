import { configureStore } from '@reduxjs/toolkit';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from "./cars/slice";
import filtersReducer from "./filters/slice";


const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'],
};

const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    filters: filtersReducer,
  },
});

export const persistor = persistStore(store);
