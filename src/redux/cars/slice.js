import { createSlice } from '@reduxjs/toolkit';
import { fetchCars, fetchCarDetails } from './operations';

const initialState = {
  cars: [],
  selectedCar: null,
  favorites: [],
  isLoading: false,
  error: null,
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    toggleFavorite: (state, action) => {
      const carId = action.payload;
      if (state.favorites.includes(carId)) {
        state.favorites = state.favorites.filter(id => id !== carId);
      } else {
        state.favorites.push(carId);
      }
    },
  },
  extraReducers: builder => {
    builder
      .addCase(fetchCars.pending, state => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
       
      const isFirstPage = action.meta.arg.page === 1; 
      if (isFirstPage) {
        state.cars = action.payload.cars || [];
      } else {
        state.cars = [...state.cars, ...(action.payload.cars || [])];
      }
      })
      .addCase(fetchCars.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Car loading error';
      })
      .addCase(fetchCarDetails.pending, state => {
        state.isLoading = true; 
        state.selectedCar = null;
        state.error = null;
      })
      .addCase(fetchCarDetails.fulfilled, (state, action) => {
        state.isLoading = false; 
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarDetails.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload || 'Car details loading error';
      });
  },
});

export const { toggleFavorite } = carsSlice.actions;
export default carsSlice.reducer;
