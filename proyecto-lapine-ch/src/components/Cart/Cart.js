import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"
import { BsFillTrash2Fill } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import './Cart.scss'


const Cart = () => {

    const { cart, totalPrice, emptyCart, removeItem } = useContext(CartContext)

    return (
        <div className="container my-5">

            {
                cart.length === 0
                    ? <>
                        <h2>Tu carrito esta vacio</h2>
                        <hr />
                        <Link to="/" className="btn btn-primary">Ir a agregar productos</Link>
                    </>

                    :
                    <>
                        <h2>Tu compra</h2>
                        <hr />
                        <h3>Los productos seleccionados son:</h3>

                        {
                            cart.map((item) => (
                                <div key={item.id} className="my-2">
                                    <h5>{item.nombre}</h5>
                                    <img className='imgSize' src={item.img} alt="productosVendidos"></img>
                                    <p>Cantidad: {item.cantidad}</p>
                                    <h6>Precio de la cantidad de productos seleccionados: ${item.precio * item.cantidad}</h6>
                                    <button onClick={() => removeItem(item.id)} className="btn btn-danger"> <BsFillTrash2Fill /> </button>

                                    <hr />


                                </div>
                            ))



                        }

                        <div>
                            <button onClick={emptyCart} className="btn btn-danger">Vaciar carrito </button>
                            <Link to="/" className="btn btn-primary">Agregar mas productos al carrito</Link>


                        </div>

                        <hr />
                        <h4>Precio total: ${totalPrice()}</h4>
                        <hr />
                        <Link to={"/cart"} className="btn btn-success"> Terminar compra </Link>

                    </>
            }

        </div>
    )
}

export default Cart