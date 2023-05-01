// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import{getFirestore} from 'firebase/firestore'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcjBBP9HzBWwPkSPKoXfr5JPTohAOE0ro",
  authDomain: "property-finder-2493c.firebaseapp.com",
  projectId: "property-finder-2493c",
  storageBucket: "property-finder-2493c.appspot.com",
  messagingSenderId: "843824881469",
  appId: "1:843824881469:web:8740a57bb028336382af54"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore();