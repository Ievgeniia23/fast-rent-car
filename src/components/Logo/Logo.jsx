import css from "./Logo.module.css"

const Logo = () => {
    return (
        <p className={css.logoStyle}>
            Rental<span className={css.logoBlue}>Car</span>
        </p>
    );
};

export default Logo;