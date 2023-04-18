// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDW-mtMUd6JOdruJP0NHYlqzeMjN49c3Kc",
  authDomain: "ema-john-with-firebase-be6c1.firebaseapp.com",
  projectId: "ema-john-with-firebase-be6c1",
  storageBucket: "ema-john-with-firebase-be6c1.appspot.com",
  messagingSenderId: "1089371960878",
  appId: "1:1089371960878:web:ed029db4769b9ab33d51bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;