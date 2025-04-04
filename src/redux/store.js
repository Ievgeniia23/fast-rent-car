import { configureStore } from '@reduxjs/toolkit';
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import carsReducer from './cars/slice';
import filtersReducer from './filters/slice';

// Конфигурация для персистенции
const persistConfig = {
  key: 'favorites',
  storage,
  whitelist: ['favorites'], // только эти данные будут сохраняться
};

// Обертываем редьюсер carsReducer в persistReducer
const persistedCarsReducer = persistReducer(persistConfig, carsReducer);

export const store = configureStore({
  reducer: {
    cars: persistedCarsReducer,
    filters: filtersReducer,
  },
  // Отключаем проверку сериализуемости для всех данных в middleware
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false, // отключаем проверку сериализуемости
      immutableCheck: false, // если необходимо отключить проверку неизменяемости
    }),
});

// Создание persistor для работы с персистенцией
export const persistor = persistStore(store);
