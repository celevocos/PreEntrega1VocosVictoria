import { PiShoppingCartFill } from 'react-icons/pi'
import { useCartContext } from '../../state/Cart.context'
import { useNavigate } from 'react-router-dom'
import './CartWidget.css';

export const CartWidget = () => {
    const { getCartCant } = useCartContext();
    const navigate = useNavigate();
    
    return (
        <div className="cart-widget" onClick={()=> navigate(`/cart/`)}>
            <PiShoppingCartFill  />
            {getCartCant() ? <span className="cart-cant">({getCartCant()})</span> : null} 
          </div>
    )
}