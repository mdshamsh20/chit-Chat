
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrlMDCQrKJdRoXECY4mdRXa3BIPKfWA0Q",
  authDomain: "chit-chat-85d22.firebaseapp.com",
  projectId: "chit-chat-85d22",
  storageBucket: "chit-chat-85d22.appspot.com",
  messagingSenderId: "30425260513",
  appId: "1:30425260513:web:9bf246b488b78cd53e32a0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);