import { useEffect, useState } from "react";
import productos from '../Item/Item'
import './ItemDetail.scss'

export const ItemDetail = () => {

    const [id, setId] = useState()

    let filtered = productos.filter(SearchId => {
        return SearchId.id === 1;
    })



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
                setId(resp)
                console.log(resp)
            })
            .catch((error) => {
                console.log('Error ', error)
            })
    }, [])



    return (
        <section className='container my-5'>
            <div className="ProductoFiltrado">
                {
                    filtered.map(obj => {
                        return (
                            <div key={obj.id}>
                                <img className='imgSize' src={obj.img} alt="productosVendidos"></img>
                                <p>{obj.description}</p>
                                <h4>Precio: ${obj.precio}</h4>
                            </div>
                        );
                    })}
            </div>
        </section>
    )
}