import { useState } from "react"
import { Navigate } from "react-router-dom";
import { useCartContext } from "../CartContext/CartContext";
import { db } from "../firebase/config";
import { collection, addDoc } from "firebase/firestore";
import { Link } from "react-router-dom";



const Checkout = () => {

    const { cart, totalPrice, emptyCart } = useCartContext()

    const [orderId, setOrderId] = useState(null)

    const [values, setValues] = useState({
        nombre: '',
        email: '',
        telefono: '',
        verificado: '',
        direccion: ''
    })

    const handleInputChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if (values.nombre.length < 5) {
            alert("El nombre es demasiado corto")
            return
        }
        if (values.telefono.length < 8) {
            alert("El numero de telefono es demasiado corto")
            return
        }
        if (values.email.length < 5) {
            alert("El email debe contener @ejemplo.com")
            return

        }
        if (values.direccion.length < 5) {
            alert("Completar con una direccion valida")
            return
        }


        const orden = {
            buyer: values,
            items: cart.map(({ id, nombre, cantidad, precio }) => ({ id, nombre, cantidad, precio })),
            total: totalPrice()
        }

        const ordersRef = collection(db, "orders")

        addDoc(ordersRef, orden)
            .then((doc) => {
                setOrderId(doc.id)
                emptyCart()
            })
    }

    if (orderId) {
        return (
            <div className="container my-5">
                <h2>Gracias por su compra!</h2>
                <hr />
                <p>Su numero de orden es: {orderId}</p>

                <Link to="/" className="btn btn-success my-2">Realizar una nueva compra</Link>

            </div>

        )
    }

    if (cart.length === 0) {
        return <Navigate to="/" />
    }


    return (
        <div className="container my-5">

            <h2> Checkout</h2>
            <hr />

            <form onSubmit={handleSubmit}>
                <div>Nombre:</div>
                <input value={values.nombre} name="nombre" type={"text"} placeholder="John Doe" className="form-control my-2" onChange={handleInputChange}></input>
                <div>Telefono:</div>
                <input value={values.telefono} name="telefono" type={"number"} placeholder="11-323-3233" className="form-control my-2" onChange={handleInputChange}></input>
                <div>Email:</div>
                <input value={values.email} name="email" type={"email"} placeholder="email@ejemplo.com" className="form-control my-2" onChange={handleInputChange}></input>
                <div>Direccion</div>
                <input value={values.direccion} name="direccion" type={"text"} placeholder="Calle Ejemplo 321" className="form-control my-2" onChange={handleInputChange}></input>


                <button type="submit" className="btn btn-success my-3"> Enviar </button>
            </form>






            <hr />
            <button onClick={emptyCart} className="btn btn-danger my-2"> Cancelar la compra</button>



        </div>

    )

}

export default Checkout


