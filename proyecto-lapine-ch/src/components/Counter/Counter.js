import './Counter.scss';


export const Counter = ({ max, setCounter, counter, handleAgregar }) => {



    const incrementar = () => {

        for (let i = counter; i < max; i++) {

            setCounter(counter + 1)
        }
    }

    const restar = () => {

        for (let i = counter; i > 0; i--) {

            setCounter(counter - 1)
        }
    }

    return (
        <div className="container" >
            <div className="flex-parent">
                <div className="flex-item" onClick={restar}>Quitar -</div>
                <div className="flex-item"> Cantidad: {counter}</div>
                <div className="flex-item" onClick={incrementar}>Añadir +</div>
                <button onClick={handleAgregar}>Agregar al carrito</button>

            </div>


        </div>
    )
}