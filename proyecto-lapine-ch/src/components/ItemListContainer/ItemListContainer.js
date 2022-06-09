import { ItemList } from "../ItemList/ItemList";
import { useEffect } from 'react'
import { useState } from 'react'
import productos from '../Item/Item'



export const ItemListContainer = ({ nombre }) => {

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
        <section>

            <h3>Bienvenido {nombre}</h3>
            <p>Puedes seleccionar entre varios de nuestros productos a continuacion: </p>

            <ItemList items={items} />
        </section>
    )
}