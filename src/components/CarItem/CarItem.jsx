import React from 'react';
import { useNavigate } from 'react-router-dom';
import css from './CarItem.module.css';


const formatAddress = address => {
  const parts = address.split(', ');
  return `${parts[1]} | ${parts[2]}`;
};


const formatMileage = mileage => {
  if (!mileage) return 'N/A';
  return new Intl.NumberFormat('en-US').format(mileage).replace(/,/g, ' ');
};

const CarItem = ({ onFavoriteToggle, isFavorite, car }) => {
  const navigate = useNavigate();

  return (
    <div className={css.card}>
      <div className={css.imageWrapper}>
        <img className={css.picture} src={car.img} alt={car.brand} />

       
      </div>

      <div className={css.boxTitle}>
        <h6 className={css.title}>
          {car.brand} <span className={css.span}>{car.model}</span>, {car.year}
        </h6>
        <p>${car.rentalPrice}</p>
      </div>
      <p className={css.text}>
        {formatAddress(car.address)} | {car.rentalCompany} |
      </p>
      <p className={css.text}>
        {car.type} | {formatMileage(car.mileage)} km
      </p>
     
      <button
        className={css.btn}
        onClick={() => navigate(`/catalog/${car.id}`, { state: { car } })}
      >
        Read more
      </button>
    </div>
    // </div>
  );
};

export default CarItem;
