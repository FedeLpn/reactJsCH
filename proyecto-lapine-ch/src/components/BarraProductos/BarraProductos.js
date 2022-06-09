import { Link } from "react-router-dom";


const BarraProductos = () => {
    return (
        < div >
            <hr />
            <Link to={"/categoria/remeras"} className="header__navlink"> Remeras </Link>
            <hr />
            <Link to={"/categoria/buzos"} className="header__navlink"> Buzos </Link>
            <hr />
        </div >
    )
}

export default BarraProductos