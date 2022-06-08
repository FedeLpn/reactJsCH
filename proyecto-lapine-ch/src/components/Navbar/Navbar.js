import './Navbar.scss'
import { CartWidget } from '../CartWidget/CartWidget'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__logo">
                    Bienvenidos a la nueva forma de comprar
                </h1>

                <nav className="header__navbar">
                    <a href='/' className="header__navlink"> Inicio </a>
                    <a href='/OfertasDelDia' className="header__navlink"> Ofertas del dia </a>
                    <a href='/productos' className="header__navlink"> Productos </a>
                    <a href='/Contacto' className="header__navlink"> Contacto </a>
                    <p className="header__navlink"><CartWidget /></p>
                </nav>
            </div>
        </header>
    )
}

//export default Navbar
