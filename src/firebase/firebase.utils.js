import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyCgPyw25hS0SjNaTLVvd9d6v28-N0kD05o",
        authDomain: "shanvifashions-695f3.firebaseapp.com",
        databaseURL: "https://shanvifashions-695f3.firebaseio.com",
        projectId: "shanvifashions-695f3",
        storageBucket: "shanvifashions-695f3.appspot.com",
        messagingSenderId: "619896322217",
        appId: "1:619896322217:web:14981d2c5a63e227bc91b8"
};

firebase.initializeApp(config);

export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;