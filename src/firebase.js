// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC0Uswcatb8GKrH7a09xKm2l6D54pLZwPA",
  authDomain: "portfolio-foto.firebaseapp.com",
  projectId: "portfolio-foto",
  storageBucket: "portfolio-foto.appspot.com",
  messagingSenderId: "675394098626",
  appId: "1:675394098626:web:706e48cf25a0bb98ef325b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default getFirestore();