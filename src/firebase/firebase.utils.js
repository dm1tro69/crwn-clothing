import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const API = process.env.REACT_APP_API_KEY

const config = {
    apiKey: API,
    authDomain: "crwn-db-2-1fe11.firebaseapp.com",
    projectId: "crwn-db-2-1fe11",
    storageBucket: "crwn-db-2-1fe11.appspot.com",
    messagingSenderId: "932515298908",
    appId: "1:932515298908:web:caa953dc73777bfaf1f099",
    measurementId: "G-802YDQ2DEN"
};
firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
