// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdh9Kthtks_qpLmTPz3IBZgo_ubFKzHNs",
  authDomain: "trip-planner-9abd0.firebaseapp.com",
  projectId: "trip-planner-9abd0",
  storageBucket: "trip-planner-9abd0.appspot.com",
  messagingSenderId: "428279077643",
  appId: "1:428279077643:web:27db88f095c1f933a2600e",
  measurementId: "G-H11EKDBTTL"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
// const analytics = getAnalytics(app);