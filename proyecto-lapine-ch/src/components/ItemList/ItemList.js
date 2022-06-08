
import IndItem from '../IndItem/IndItem'

import './ItemList.scss'


export const ItemList = ({ items }) => {


    return (
        <section className='container my-5'>
            {
                items.map((item) => <IndItem key={item.id} item={item} />)
            }

        </section >
    )
}