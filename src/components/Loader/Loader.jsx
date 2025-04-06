import { useSelector } from 'react-redux';
import { selectIsLoading } from '../../redux/cars/selectors';
import { ClipLoader } from 'react-spinners';
import css from './Loader.module.css';

const Loader = () => {
  const isLoading = useSelector(selectIsLoading);

  return (
    <div className={css.loaderStyle}>
      <ClipLoader color="#0b44cd" loading={isLoading} size={50} />
    </div>
  );
};

export default Loader;


