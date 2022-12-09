import React from "react"
import { FaCoffee } from "react-icons/fa"

const Header = () => {

  const HeaderIcon = FaCoffee

  //static content
  return (
    <header className="header">
      <HeaderIcon className="header--icon"/>
      <h2 className="header--title">Rock-Paper-Scissors Game</h2>
      <h4 className="header--version">Version 1.0</h4>
    </header>

  )

}

export default Header