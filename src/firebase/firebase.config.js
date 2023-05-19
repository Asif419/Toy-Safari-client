// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdiLc4BE9sw920cKSCN-PqOrvZAqceBCw",
  authDomain: "toy-safari.firebaseapp.com",
  projectId: "toy-safari",
  storageBucket: "toy-safari.appspot.com",
  messagingSenderId: "125143002459",
  appId: "1:125143002459:web:72e9ef666b36e0843dfe7e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;