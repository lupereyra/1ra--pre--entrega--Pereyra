import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'
import { NavLink, Link } from "react-router-dom"

const NavBar = () => {
  return (
    <header>
      <Link to={"/"}>
        <h1>DeporShop</h1>
      </Link>


      <nav>
        <ul>
          <li>
            <NavLink to={'/categoria/2'}> Hombre </NavLink>
          </li>
          <li>
            <NavLink to={'/categoria/3'}> Mujer </NavLink>
          </li>
          <li>
            <NavLink to={'/categoria/4'}> Niños </NavLink>
          </li>
        </ul>
      </nav>

      <CartWidget />

    </header>
  )
}

export default NavBar