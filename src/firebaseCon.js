// Import the functions you need from the SDKs you need
import {getFirestore} from "firebase/firestore"
import { initializeApp } from "firebase/app"
;// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy7arxBDe22UIa9e3pce9pxp2hkHXLEkg",
  authDomain: "nbg-etax.firebaseapp.com",
  projectId: "nbg-etax",
  storageBucket: "nbg-etax.appspot.com",
  messagingSenderId: "843951668782",
  appId: "1:843951668782:web:767ac52208b9bcbb58a9bf",
  measurementId: "G-Q50LML01L9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
export default db;