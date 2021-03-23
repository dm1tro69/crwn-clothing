import React from 'react'
import {useDispatch, useSelector} from "react-redux";
import {Link} from 'react-router-dom'
import './header.styles.scss'
import {ReactComponent as Logo} from '../../assets/crown.svg'
import {auth} from "../../firebase/firebase.utils";

const Header = () => {

    // const dispatch = useDispatch()
    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)

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
    </div>
</div>
)
}
 export default Header