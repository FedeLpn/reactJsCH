import { useState } from "react"

export const Counter = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {

        setContador(contador + 1)
    }

    const restar = () => {

        setContador(contador - 1)
    }

    return (
        <div className="container my-5" >
            <h2> Producto </h2>
            <p> Cantidad {contador}</p> <p onClick={incrementar}>Añadir +</p> <p onClick={restar}>Quitar -</p>

        </div>
    )
}