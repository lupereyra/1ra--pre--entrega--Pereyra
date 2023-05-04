import CartWidget from "../CartWidget/CartWidget"
import './NavBar.css'


const NavBar = () => {
  return (
    <header>
        <h1>Todo Moda</h1>
        <nav>
            <ul>
                <li>Abrigos</li>
                <li>Calzados</li>
                <li>Carteras</li>
                <li>Accesorios</li>
            </ul>
        </nav>
        <CartWidget />

    </header>
  )
}

export default NavBar