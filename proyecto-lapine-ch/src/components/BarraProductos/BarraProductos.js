import { Link } from "react-router-dom";
import './BarraProductos.scss'


const BarraProductos = () => {
    return (


        <header className="secHeader">

            <div className="secHeader__wrapper">

                <h1 className="secHeader__logo">
                    Productos para filtrar la busqueda:
                </h1>

                <nav className="secHeader__navbar">
                    <Link to={"/categoria/remeras"} className="secHeader__navlink"> Remeras </Link>
                    <Link to={"/categoria/buzos"} className="secHeader__navlink"> Buzos </Link>
                </nav>

            </div>


        </header>

    )
}

export default BarraProductos