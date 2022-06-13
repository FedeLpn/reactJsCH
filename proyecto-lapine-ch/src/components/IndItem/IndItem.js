import { useState } from 'react';
import { Counter } from '../Counter/Counter';

const IndItem = ({ item }) => {

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        console.log(itemToCart)

    }


    return (
        < div >
            <h2>{item.nombre}</h2>
            <img className='imgSize' src={item.img} alt="productosVendidos"></img>
            <p>{item.description}</p>
            <h4>Precio: ${item.precio}</h4>
            <div>

                <Counter max={item.stock}
                    setCounter={setCantidad}
                    counter={cantidad}
                    handleAgregar={handleAgregar} />

            </div>
            <hr />
        </div >
    )
}

export default IndItem