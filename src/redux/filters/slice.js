import { createSlice } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'; 


const initialState = {
  brand: '',
  price: '',
  minMileage: '',
  maxMileage: '',
};


const filtersPersistConfig = {
  key: 'filters',
  storage,
};

const filtersSlice = createSlice({
  name: 'filters',
  initialState,
  reducers: {
    setFilters: (state, action) => {
      return { ...state, ...action.payload }; 
    },
    resetFilters: () => initialState, 
  },
});

export const { setFilters, resetFilters } = filtersSlice.actions;
export default persistReducer(filtersPersistConfig, filtersSlice.reducer);
