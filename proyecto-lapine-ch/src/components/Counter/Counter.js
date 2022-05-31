import { useState } from "react"
import './Counter.scss'

export const Counter = () => {

    const [contador, setContador] = useState(1)

    const incrementar = () => {

        for (let i = contador; i < 10; i++) {

            setContador(contador + 1)
        }
    }

    const restar = () => {

        for (let i = contador; i > 0; i--) {

            setContador(contador - 1)
        }
    }

    return (
        <div className="container" >
            <h2> Producto </h2>
            <div className="flex-parent">
                <div className="flex-item" onClick={restar}>Quitar -</div>
                <div className="flex-item"> Cantidad: {contador}</div>
                <div className="flex-item" onClick={incrementar}>Añadir +</div>
            </div>

        </div>
    )
}