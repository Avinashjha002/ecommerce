// import firebase from "firebase";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyA_3Yj2R27P5sVdX3XtmAqZS5bDmK27npo",
    authDomain: "e-commerce-da8dc.firebaseapp.com",
    projectId: "e-commerce-da8dc",
    storageBucket: "e-commerce-da8dc.appspot.com",
    messagingSenderId: "521359646108",
    appId: "1:521359646108:web:38bcd2a1d5633d64977c59",
    measurementId: "G-J93ZSK7SHN"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};