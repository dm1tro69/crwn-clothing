import React, {useState, useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'

import "./pages/homepage/homepage.styles.scss"
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import {auth} from "./firebase/firebase.utils";


function App() {

    const [currentUser, setCurrent] = useState(null)

    let unsubscribeFromAuth = null

    useEffect(()=> {
       unsubscribeFromAuth = auth.onAuthStateChanged(user => {
            setCurrent(user)
            console.log(user)
           return ()=> {
                unsubscribeFromAuth()
           }
        })
    }, [])

  return (
    <div>
        <Header currentUser={currentUser}/>
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route  path={'/shop'} component={ShopPage}/>
            <Route  path={'/signin'} component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
