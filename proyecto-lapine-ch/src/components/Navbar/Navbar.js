import './Navbar.scss'

export const Navbar = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <h1 className="header__logo">
                    Bienvenidos a la nueva forma de comprar
                </h1>

                <nav className="header__navbar">
                    <p className="header__navlink"> Ofertas del dia </p>
                    <p className="header__navlink"> Productos </p>
                    <p className="header__navlink"> Contacto </p>
                </nav>
            </div>
        </header>
    )
}

//export default Navbar
