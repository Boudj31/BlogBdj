import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC3lEP2bv_Vz-GJYlL93hXtO80DlsT-26M",
    authDomain: "blogbdj-c598e.firebaseapp.com",
    projectId: "blogbdj-c598e",
    storageBucket: "blogbdj-c598e.appspot.com",
    messagingSenderId: "506170449699",
    appId: "1:506170449699:web:e5800bc2d0fe371c7e7696"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { timestamp };
export default firebaseApp.firestore();
