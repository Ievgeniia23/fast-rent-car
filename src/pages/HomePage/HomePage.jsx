import { Link } from "react-router-dom";
import css from "./HomePage.module.css"

const HomePage = () => {
  return (
    <div className={css.homeWrapper}>
      <div className={css.textWrapper}>
        <h1>Find your perfect rental car</h1>
        <p>Reliable and budget-friendly rentals for any journey</p>

        <Link to="/catalog">
          <button type="button">View Catalog</button>
        </Link>
      </div>
    </div>
  );    
};

export default HomePage;