import {getApp, initializeApp} from "firebase/app";
import { connectFirestoreEmulator, getFirestore } from "firebase/firestore";
import {getAuth, connectAuthEmulator} from "firebase/auth";
import {getStorage, connectStorageEmulator} from "firebase/storage";
import {getFunctions, connectFunctionsEmulator} from "firebase/functions";

const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
  };
  
// Initialize Firebase
initializeApp(firebaseConfig);

const db = getFirestore();
// connectFirestoreEmulator(db, 'localhost', 8080);

// const auth = getAuth();
// connectAuthEmulator(auth, "http://localhost:9099");

// const storage = getStorage();
// connectStorageEmulator(storage, "localhost", 9199);

// const functions = getFunctions(getApp());                         // getApp() from "firebase/app"
// connectFunctionsEmulator(functions, "localhost", 5001);

export default db;