import './NavBar.css' 
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {
  return (
    <header>
        <h1>Stranger Drinks</h1>
        <nav>
            <ul>
                <li>Aperitivos</li>
                <li>Cervezas</li>
                <li>Espumantes</li>
                <li>Gins</li>
                <li>Licores</li>
                <li>Ron</li>
                <li>Vinos</li>
                <li>Vodkas</li>
                <li>Whiskys</li>
            </ul>
        </nav>
        <CartWidget/>
    </header>
  )
}

export default NavBar