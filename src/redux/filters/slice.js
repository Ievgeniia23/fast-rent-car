import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; // Для збереження в локальному сховищі

// Ініціалізація стану фільтрів
const initialState = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};

// Конфігурація для persist
const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload }; // Оновлює фільтри
    },
    resetFilters: () => initialState, // Додаємо можливість скидання фільтрів
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default persistReducer(filtersPersistConfig, filtersSlice.reducer);
