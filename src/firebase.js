// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDGRDOctRY1SM6EKGiSgugPhRiI8PjpVR8",
    authDomain: "practiseapp-23c0b.firebaseapp.com",
    databaseURL: "https://practiseapp-23c0b-default-rtdb.firebaseio.com",
    projectId: "practiseapp-23c0b",
    storageBucket: "practiseapp-23c0b.appspot.com",
    messagingSenderId: "782445633726",
    appId: "1:782445633726:web:340f8db779457b4f2afeef"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);