import { useContext } from "react"
import { CartContext } from "../CartContext/CartContext"


const Cart = () => {

    const { cart, totalPrice } = useContext(CartContext)

    return (
        <div className="container my-5">
            <h2>Tu compra</h2>
            <hr />
            <h3>Los productos seleccionados son:</h3>

            {
                cart.map((item) => (
                    <div key={item.id} className="my-2">
                        <h5>{item.nombre}</h5>
                        <p>Cantidad: {item.cantidad}</p>
                        <h6>Precio de la cantidad de productos seleccionados: ${item.precio * item.cantidad}</h6>
                        <hr />
                    </div>
                ))
            }

            <h4>Precio total: ${totalPrice()}</h4>
        </div>
    )
}

export default Cart