import React, {useEffect} from 'react';
import './App.css';
import {Switch, Route} from 'react-router-dom'
import {useDispatch} from "react-redux";
import {setCurrentUser} from "./redux/user/user.actions";

import "./pages/homepage/homepage.styles.scss"
import HomePage from "./pages/homepage/homepage.component";
import ShopPage from "./pages/shop/shop.component";
import Header from "./components/header/header.component";
import SignInAndSignUpPage from "./pages/sign-in-and-signup/sign-in-and-signup.component";
import {auth, createUserProfileDocument} from "./firebase/firebase.utils";


function App() {

    const dispatch = useDispatch()


    let unsubscribeFromAuth = null

    useEffect(()=> {
       unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
           if (userAuth){
               const userRef = await createUserProfileDocument(userAuth)

               userRef.onSnapshot(snapshot => {


                   dispatch(setCurrentUser({
                       id: snapshot.id,
                       ...snapshot.data()
                   }))
               })

           }else {
               dispatch(setCurrentUser(userAuth))
           }

           return ()=> {
                unsubscribeFromAuth()
           }
        })
    }, [])

  return (
    <div>
        <Header />
        <Switch>
            <Route exact path={'/'} component={HomePage}/>
            <Route  path={'/shop'} component={ShopPage}/>
            <Route  path={'/signin'} component={SignInAndSignUpPage}/>
        </Switch>
    </div>
  );
}

export default App;
