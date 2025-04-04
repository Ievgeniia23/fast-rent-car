import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations'; // API запит для автомобілів
import {
  selectCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors'; // Селектор для фільтрів
import CarItem from '../../components/CarItem/CarItem';
import Loader from '../../components/Loader/Loader';
import FilterForm from '../../components/FilterForm/FilterForm';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters)); // Викликаємо fetchCars з фільтрами
  }, [filters, dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div>
     <FilterForm />
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
