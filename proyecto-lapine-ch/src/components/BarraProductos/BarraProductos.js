import { Link } from "react-router-dom";
import './BarraProductos.scss'


const BarraProductos = () => {
    return (
        < div className="padre">
            <div className="prod">
                <hr />
                <Link to={"/categoria/remeras"} className="prod__navlink"> Remeras </Link>
                <hr />
                <Link to={"/categoria/buzos"} className="prod__navlink"> Buzos </Link>
                <hr />
            </div>
        </div >
    )
}

export default BarraProductos