import { ItemDetail } from "../ItemDetail/ItemDetail";
import './ItemDetailContainer.scss'

export const ItemDetailContainer = ({ nombre }) => {
    return (
        <section >
            <div className="centrado" >
                <h3> {nombre} su producto es el siguiente</h3>
                <p>Producto detallado a continuacion: </p>
                <ItemDetail />
            </div>
        </section>
    )
}