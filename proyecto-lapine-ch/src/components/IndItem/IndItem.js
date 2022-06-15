import { useContext, useState } from 'react';
import { CartContext } from '../CartContext/CartContext';
import { Counter } from '../Counter/Counter';
import { Link } from 'react-router-dom'



const IndItem = ({ item }) => {

    const { addItem, isInCart } = useContext(CartContext)

    const [cantidad, setCantidad] = useState(1)

    const handleAgregar = () => {
        const itemToCart = {
            ...item,
            cantidad
        }

        addItem(itemToCart)

    }


    return (
        < div >
            <h2>{item.nombre}</h2>
            <img className='imgSize' src={item.img} alt="productosVendidos"></img>
            <p>{item.description}</p>
            <h4>Precio: ${item.precio}</h4>
            <div>
                {
                    isInCart(item.id)
                        ? <Link to="/cart" className="btn btn-success my-3">Terminar mi compra</Link>
                        :
                        <Counter
                            max={item.stock}
                            setCounter={setCantidad}
                            counter={cantidad}
                            handleAgregar={handleAgregar} />
                }
            </div>
            <hr />
        </div >
    )
}

export default IndItem