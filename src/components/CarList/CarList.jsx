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
      <ul>
        {cars.map(car => (
          <li key={car.id}>
            <h2>{car.name}</h2>
            <button onClick={() => dispatch(toggleFavorite(car.id))}>
              {favorites.includes(car.id)
                ? 'Remove from favourites'
                : 'Add to favourites'}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CarList;
