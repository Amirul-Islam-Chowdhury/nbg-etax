

import { initializeApp } from "firebase/app";

import {getfireStore} from  "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAy7arxBDe22UIa9e3pce9pxp2hkHXLEkg",
    authDomain: "nbg-etax.firebaseapp.com",
    projectId: "nbg-etax",
    storageBucket: "nbg-etax.appspot.com",
    messagingSenderId: "843951668782",
    appId: "1:843951668782:web:767ac52208b9bcbb58a9bf",
    measurementId: "G-Q50LML01L9"
  };
  

  const app = initializeApp(firebaseConfig);

  const db = getfireStore(app);