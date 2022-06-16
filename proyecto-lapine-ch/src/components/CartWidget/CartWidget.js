import { useContext } from 'react'
import { BsCart3 } from 'react-icons/bs'
import { CartContext } from '../CartContext/CartContext'

export const CartWidget = () => {

    const { totalQuantity } = useContext(CartContext)

    return (

        <section>
            <BsCart3 />
            <span>{totalQuantity()}</span>
        </section>
    )
}

//export default CartWidget