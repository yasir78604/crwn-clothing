import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const config = {
    apiKey: "AIzaSyCBY79ExlvWl1ZC-hfhdprSrQZqZfZ70ng",
    authDomain: "crwn-fdb.firebaseapp.com",
    databaseURL: "https://crwn-fdb.firebaseio.com",
    projectId: "crwn-fdb",
    storageBucket: "crwn-fdb.appspot.com",
    messagingSenderId: "520697118030",
    appId: "1:520697118030:web:ffdbd2c77ee8372203721f"
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth()
  export const firestore = firebase.firestore()

  const provider = new firebase.auth.GoogleAuthProvider()
  provider.setCustomParameters({prompt:"select_account"})

  export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase

