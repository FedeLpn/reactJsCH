import { ItemList } from "../ItemList/ItemList";
import './ItemDetailContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import productos from '../Item/Item'
import { useParams } from "react-router-dom";
import BarraProductos from "../BarraProductos/BarraProductos";



export const ItemDetailContainer = ({ nombre }) => {

    const [items, setItems] = useState([])

    const { categoryId } = useParams()
    console.log(categoryId)


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
                if (!categoryId) {
                    setItems(resp)
                } else {
                    setItems(resp.filter((item) => item.categoria === categoryId))
                }

            })
            .catch((error) => {
                console.log('Error ', error)
            })
    }, [categoryId])

    return (
        <section >

            <div> <BarraProductos /></div>
            <div className="centrado" >
                <h3> {nombre} los productos son los siguientes:</h3>
                <p> Utilice los filtros en la parte superior en el caso que quiera acotar la busqueda </p>
                <ItemList items={items} />
            </div>
        </section>
    )
}