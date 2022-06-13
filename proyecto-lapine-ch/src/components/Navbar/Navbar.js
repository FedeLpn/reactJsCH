import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__logo">
                    Bienvenidos a la nueva forma de comprar
                </h1>

                <nav className="header__navbar">
                    <Link to={"/"} className="header__navlink"> Inicio </Link>
                    <Link to={"/productos"} className="header__navlink"> Productos </Link>
                    <Link to={"/Contacto"} className="header__navlink"> Contacto </Link>
                    <Link to={"/cart"} className="header__navlink"><CartWidget /></Link>
                    <Link to={"/cart"} className="header__navlink"> Terminar compra </Link>
                </nav>

            </div>


        </header>

    )
}

//export default Navbar
