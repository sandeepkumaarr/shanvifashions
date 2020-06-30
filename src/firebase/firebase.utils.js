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

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;
       const userRef = firestore.doc(`users/${userAuth.uid}`);
       
       const snapShot = await userRef.get();

       if(!snapShot.exists) {
        const {displayName, email } = userAuth;
        const createdAt = new Date();

        try{

        await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
        })

        }catch(error){
                console.log('error creating user', error.message)
        }
       }

       return userRef; 

}

firebase.initializeApp(config);



export const auth =  firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;