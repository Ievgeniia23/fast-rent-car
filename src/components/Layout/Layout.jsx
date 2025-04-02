
import {Toaster} from "react-hot-toast"
import AppBar from "../AppBar/AppBar"
import css from "./Layout.module.css"

import React from 'react'

const Layout = ({children}) => {
  return (
    <div className={css.layout}>
      <AppBar />
      <main>{children}</main>
      <Toaster position="top-center" reverseOrder={false} />
    </div>
  );
}

export default Layout;