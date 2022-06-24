import { ItemList } from "../ItemList/ItemList";
import './ItemDetailContainer.scss'
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import BarraProductos from "../BarraProductos/BarraProductos";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../firebase/config"


export const ItemDetailContainer = () => {

    const [items, setItems] = useState([])

    const [loading, setLoading] = useState(true)

    const { categoryId } = useParams()

    useEffect(() => {
        //1.armar la referencia
        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef
        //2.llamar a Firebase con referencia anterior
        getDocs(q)
            .then((resp) => {
                const newItems = resp.docs.map((doc) => {
                    return {
                        id: doc.id,
                        ...doc.data()
                    }

                })
                setItems(newItems)
            })
            .finally(() => {
                setLoading(false)
            })
    }, [categoryId])

    return (
        <section >
            {
                loading
                    ? <loader />
                    :
                    <><div> <BarraProductos /></div>
                        <div className="centrado" >
                            <h3> Los productos son los siguientes:</h3>
                            <p> Utilice los filtros en la parte superior en el caso que quiera acotar la busqueda </p>
                            <ItemList items={items} />
                        </div>
                    </>
            }
        </section>
    )
}
