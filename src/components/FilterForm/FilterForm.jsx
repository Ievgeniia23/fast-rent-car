import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setFilters } from '../../redux/filters/slice';
import css from './FilterForm.module.css'; 

const brands = [
  'Aston Martin',
  'Audi',
  'BMW',
  'Bentley',
  'Buick',
  'Chevrolet',
  'Chrysler',
  'GMC',
  'HUMMER',
];
const prices = [30, 40, 50, 60, 70, 80];

const FilterForm = () => {
  const dispatch = useDispatch();
  const [filters, setLocalFilters] = useState({
    brand: '',
    price: '',
    minMileage: '',
    maxMileage: '',
  });

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(setFilters(filters));
  };

  return (
    <form onSubmit={handleSubmit} className={css.formContainer}>
      <div className={css.fieldGroup}>
        <label className={css.label}>Car brand</label>
        <select
          value={filters.brand}
          onChange={e => setLocalFilters({ ...filters, brand: e.target.value })}
          className={css.select}
        >
          <option value="">Choose a brand</option>
          {brands.map(brand => (
            <option key={brand} value={brand}>
              {brand}
            </option>
          ))}
        </select>
      </div>

      <div className={css.fieldGroup}>
        <label className={css.label}>Price / 1 hour</label>
        <select
          value={filters.price}
          onChange={e => setLocalFilters({ ...filters, price: e.target.value })}
          className={css.select}
        >
          <option value="">Choose a price</option>
          {prices.map(price => (
            <option key={price} value={price}>
              {price}
            </option>
          ))}
        </select>
      </div>

      <div className={css.fieldMileageGroup}>
        <label className={css.label}>Car mileage / km</label>
        <div className={css.mileageContainer}>
          <input
            type="number"
            placeholder="From"
            value={filters.minMileage}
            onChange={e =>
              setLocalFilters({ ...filters, minMileage: e.target.value })
            }
            className={`${css.input} ${css.inputLeft}`}
          />
          <input
            type="number"
            placeholder="To"
            value={filters.maxMileage}
            onChange={e =>
              setLocalFilters({ ...filters, maxMileage: e.target.value })
            }
            className={`${css.input} ${css.inputRight}`}
          />
        </div>
      </div>

      <button type="submit" className={css.searchButton}>
        Search
      </button>
    </form>
  );
};

export default FilterForm;
