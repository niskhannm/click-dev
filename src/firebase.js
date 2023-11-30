// Import the functions you need from the SDKs you need
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCXVCmV7011kv1zkjKF6KEIaJMqySDiQq4",
  authDomain: "restaurant-management-sy-72b4c.firebaseapp.com",
  projectId: "restaurant-management-sy-72b4c",
  storageBucket: "restaurant-management-sy-72b4c.appspot.com",
  messagingSenderId: "315999394350",
  appId: "1:315999394350:web:39b37bd8d26110e81a1dbf",
  measurementId: "G-R7J8H680LP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth(app);
export const db = getFirestore(app);
