import './ItemDetail.scss'
import IndItem from '../../IndItem/IndItem'

export const ItemDetail = (items) => {


    return (
        <section className='container my-5'>
            <div className="ProductoFiltrado">
                {

                    items.map((item) => <IndItem key={item.id} item={item} />)

                }
            </div>
        </section>
    )
}
