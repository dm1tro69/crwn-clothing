import React from 'react'
import {useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";
import CartItem from "../cart-icon/cart-item.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {

    const currentUser = useSelector(state => state.user.currentUser)
    const cartHidden = useSelector(state => state.cart.hidden)

return (
<div className={'header'}>
   <Link className="logo-container" to="/">
       <Logo className="logo"/>
   </Link>
    <div className={'options'}>
        <Link className="option" to={'/shop'}>SHOP</Link>
        <Link className="option" to={'/shop'}>CONTACT</Link>
        {
            currentUser?
                <div style={{cursor: 'pointer'}} className={'option'} onClick={() => auth.signOut()}>SIGN OUT</div>
                :
                <Link className="option" to={'/signin'}>SIGN IN</Link>
        }
        <CartItem/>
    </div>
    {cartHidden ? null : <CartDropdown/>}
</div>
)
}
 export default Header