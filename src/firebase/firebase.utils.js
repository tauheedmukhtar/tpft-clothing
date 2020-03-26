import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCRQcNilq7RjZpa0ywV--9odpZXci3DCXg",
    authDomain: "tpft-clothing.firebaseapp.com",
    databaseURL: "https://tpft-clothing.firebaseio.com",
    projectId: "tpft-clothing",
    storageBucket: "tpft-clothing.appspot.com",
    messagingSenderId: "410570486688",
    appId: "1:410570486688:web:32f7bbc047c8427394eac5"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`user/${userAuth.uid}`);

    const snapShot = await userRef.get(); 

    if (!snapShot.exists) {
        const {displayName, email} = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log ('error creating user', error.message)
        }
    }
    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;