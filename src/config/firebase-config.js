import { initializeApp } from "firebase/app";
import {getAuth,GoogleAuthProvider} from "firebase/auth"
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAcP-rGMqvIdPaI9rdEL7-2J79Sp4Yl4Ts",
  authDomain: "expense-tracker-7c234.firebaseapp.com",
  projectId: "expense-tracker-7c234",
  storageBucket: "expense-tracker-7c234.appspot.com",
  messagingSenderId: "676056999711",
  appId: "1:676056999711:web:d41869b21b16952e01b22a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export const provider = new GoogleAuthProvider()
export const db = getFirestore(app);