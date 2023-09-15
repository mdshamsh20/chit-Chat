
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAj_Qvpfm0wRX27y2ZWvVxYQFcdyJsEEEo",
  authDomain: "chitchat-69c26.firebaseapp.com",
  projectId: "chitchat-69c26",
  storageBucket: "chitchat-69c26.appspot.com",
  messagingSenderId: "85192180178",
  appId: "1:85192180178:web:004d4084e5f42d463c080b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);