import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const API = process.env.REACT_APP_API_KEY
const ID = process.env.REACT_APP_API_ID

const config = {
    apiKey: API,
    authDomain: "crwn-db-2-1fe11.firebaseapp.com",
    projectId: "crwn-db-2-1fe11",
    storageBucket: "crwn-db-2-1fe11.appspot.com",
    messagingSenderId: "932515298908",
    appId: ID,
    measurementId: "G-802YDQ2DEN"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)
    const snapShot = await userRef.get()
    if (!snapShot.exists){
        const {displayName, email} = userAuth
        const createdAt = new Date()
        
        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (e) {
            console.log('error creating user', e.message)
        }
    }
    return userRef
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

const provider = new firebase.auth.GoogleAuthProvider()
provider.setCustomParameters({prompt: "select_account"})
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase
