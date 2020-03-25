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

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;