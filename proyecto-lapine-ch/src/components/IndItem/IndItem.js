import { Counter } from '../Counter/Counter';

const IndItem = ({ item }) => {
    return (
        < div >
            <h2>{item.nombre}</h2>
            <img className='imgSize' src={item.img} alt="productosVendidos"></img>
            <p>{item.description}</p>
            <h4>Precio: ${item.precio}</h4>
            <a href='/detalle'> Mas Info</a>
            <div>
                <p>
                    <Counter />
                </p>
            </div>
            <hr />
        </div >
    )
}

export default IndItem