import Logo from "../Logo/Logo";
import Navigation from "../Navigation/Navigation";
import css from "./AppBar.module.css"


const AppBar = () => {
  return (
      <div>
          <header>
              <Logo />
              <Navigation />
                
          </header> 
        
      </div>
  )
}

export default AppBar;