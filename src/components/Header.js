import React from "react"
import { Link, Outlet } from "react-router-dom";
import { FaCoffee } from "react-icons/fa"

const Header = () => {

  const HeaderIcon = FaCoffee

  //static content
  return (
    <header className="header">
      <HeaderIcon className="header--icon"/>
      <h2 className="header--title">Rock-Paper-Scissors</h2>
      <nav className="header--nav">
        <Link to="/">Home</Link> |{" "}
        <Link to="/play">Play</Link> |{" "}
        <Link to="/about">About</Link>
      </nav>
      {/* for using inside of header component */}
      <Outlet />
      {/* <h4 className="header--version">Version 1.0</h4> */}
    </header>

  )

}

export default Header