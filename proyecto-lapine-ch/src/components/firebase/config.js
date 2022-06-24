// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBOjhcCXzx-kqt3J6Zy5AA9iPTEbmSVsVU",
    authDomain: "lpn-ventas.firebaseapp.com",
    projectId: "lpn-ventas",
    storageBucket: "lpn-ventas.appspot.com",
    messagingSenderId: "1015452296180",
    appId: "1:1015452296180:web:e6c2fc663d29af8b360fa1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app)