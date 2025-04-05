import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import { selectFilters } from '../../redux/filters/selectors';
import CarItem from '../../components/CarItem/CarItem';
import Loader from '../../components/Loader/Loader';
import FilterForm from '../../components/FilterForm/FilterForm';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const filters = useSelector(selectFilters);

  useEffect(() => {
    dispatch(fetchCars(filters));
  }, [filters, dispatch]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className={css.container}>
      <FilterForm />
      <ul className={css.carList}>
        {cars.map(car => (
          <li className={css.carItem} key={car.id}>
            <CarItem car={car} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CatalogPage;
