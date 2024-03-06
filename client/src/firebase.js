// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "advisoropedia-assignment-937f5.firebaseapp.com",
  projectId: "advisoropedia-assignment-937f5",
  storageBucket: "advisoropedia-assignment-937f5.appspot.com",
  messagingSenderId: "1015289770056",
  appId: "1:1015289770056:web:5ffad373182fef37e2287d"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);