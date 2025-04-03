import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css"


const AppBar = () => {
  return (
    <div className={css.AppBarWrapper}>
      <header className={css.headerWrapper}>
        <Logo />
        <Navigation />
      </header>
    </div>
  );
}

export default AppBar;