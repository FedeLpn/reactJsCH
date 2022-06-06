import { useEffect } from 'react'
import { useState } from 'react'
import productos from '../Item/Item'
import { Counter } from '../Counter/Counter';
import './ItemList.scss'


export const ItemList = () => {

    const [items, setItems] = useState([])

    const pedirDatos = () => {

        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(productos)
            }, 2000)
        })
    }

    useEffect(() => {
        pedirDatos()
            .then((resp) => {
                setItems(resp)
            })
            .catch((error) => {
                console.log('Error ', error)
            })
    }, [])

    return (
        <section className='container my-5'>
            {
                items.map((item) => (
                    <div>
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
                    </div>
                ))
            }

        </section >
    )
}