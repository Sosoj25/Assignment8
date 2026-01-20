// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBC0Y00BXcf3J6cs12XBNzxoSG8nuZj3Tc",
    authDomain: "ananta-login.firebaseapp.com",
    projectId: "ananta-login",
    storageBucket: "ananta-login.firebasestorage.app",
    messagingSenderId: "458168665215",
    appId: "1:458168665215:web:63bfa19ccc5e9f4e2fab4a",
    measurementId: "G-8T8Y5T43S5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);