import React from 'react'
import {useDispatch} from "react-redux";
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'
import './cart-icon.style.scss'
import {toggleCartHidden} from "../../redux/cart/cart.actions";

const CartItem = () => {

  const dispatch = useDispatch()

return (
<div onClick={() => dispatch(toggleCartHidden())} className="cart-icon">
  <ShoppingIcon  className="shopping-icon"/>
  <span className={'item-count'}>0</span>
</div>
)
}
export default CartItem