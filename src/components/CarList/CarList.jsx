import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchCars } from '../../redux/cars/operations';
import {
  selectCars,
  selectIsLoading,
  selectError,
} from '../../redux/cars/selectors';
import { toggleFavorite } from '../../redux/cars/slice';
import { selectFavorites } from '../../redux/cars/selectors';
import Loader from '../../components/Loader/Loader';

const CarList = ({ filters, page, setTotalPages }) => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars); 
  const favorites = useSelector(selectFavorites);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchCars({ page, filters })).then(action => {
      if (action.payload && action.payload.totalPages) {
        setTotalPages(action.payload.totalPages);
      }
    });
  }, [dispatch, page, filters, setTotalPages]);

  if (isLoading) return <Loader />;
  if (error) return <p>Error: {error}</p>;
  if (!cars || cars.length === 0) return <p>There are no cars available</p>;

  return (
    <div>
      <ul className={css.list}>
        {cars.map(car => (
          <li key={car.id} className={css.item}>
            <CarItem
              car={car}
              isFavorite={favorites.includes(car.id)}
              onFavoriteToggle={() => dispatch(toggleFavorite(car.id))}
            />
          </li>
        ))}
      </ul>
    
    </div>
  );
};

export default CarList;
