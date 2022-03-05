import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBATlc_vcXgJTYBWGQBH359c9IcrVKn82Y",
  authDomain: "housemarketplace-89896.firebaseapp.com",
  projectId: "housemarketplace-89896",
  storageBucket: "housemarketplace-89896.appspot.com",
  messagingSenderId: "779416851853",
  appId: "1:779416851853:web:0bedba6f0146397ef659c4"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore()