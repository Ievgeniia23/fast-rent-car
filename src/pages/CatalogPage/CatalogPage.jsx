import React, { useEffect, useState } from 'react';
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

  const [page, setPage] = useState(1); 
  const [isEnd, setIsEnd] = useState(false);
  const limit = 8; 

 useEffect(() => {
  
   setPage(1);
   setIsEnd(false);
   dispatch(fetchCars({ page: 1, filters }));
 }, [filters, dispatch]);

  useEffect(() => {
    if (page === 1) return; 
    dispatch(fetchCars({ page, filters }))
      .unwrap()
      .then(result => {
        
        if (!result.cars.length) setIsEnd(true);
      });
  }, [page, dispatch, filters]);

  const handleLoadMore = () => {
    setPage(prev => prev + 1); 
  };
  
  if (isLoading && page === 1) return <Loader />; 
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

      {!isEnd && (
        <div className={css.buttonWrapper}>
          <button className={css.loadMoreButton} onClick={handleLoadMore}>
            {isLoading ? <Loader /> : 'Load more'}
          </button>
        </div>
      )}
    </div>
  );
};

export default CatalogPage;
