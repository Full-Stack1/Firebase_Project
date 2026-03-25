// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBMIR65lMaUjPdYqUZG18Dwtx2WezUj458",
  authDomain: "first-project-e8692.firebaseapp.com",
  projectId: "first-project-e8692",
  storageBucket: "first-project-e8692.firebasestorage.app",
  messagingSenderId: "312945246324",
  appId: "1:312945246324:web:4f3f8078d5f429d95b9121",
  measurementId: "G-JPSWMEN53W"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db= getFirestore(app)