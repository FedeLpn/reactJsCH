import { ItemList } from "../ItemList/ItemList";
import { useEffect } from 'react'
import { useState } from 'react'
import { useParams } from "react-router-dom";
import { db } from "../firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";



export const ItemListContainer = () => {

    const [items, setItems] = useState([])

    const { categoryId } = useParams()


    useEffect(() => {

        const productosRef = collection(db, "productos")
        const q = categoryId ? query(productosRef, where("categoria", "==", categoryId)) : productosRef

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

    }, [categoryId])

    return (
        <section>
            <div className="container my-5">
                <h3>Bienvenido </h3>
                <p>Puedes seleccionar entre varios de nuestros productos a continuacion: </p>

                <ItemList items={items} />
            </div>
        </section>
    )
}