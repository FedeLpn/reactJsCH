import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import productos from '../Item/Item'

export const ItemDetailContainer = ({ nombre }) => {

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
        <section >
            <div className="centrado" >
                <h3> {nombre} su producto es el siguiente</h3>
                <p>Producto detallado a continuacion: </p>
                <ItemDetail items={items} />
            </div>
        </section>
    )
}