// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAacn2vAJ11HyGN9m1mxQeUPvdXfgQ817k",
  authDomain: "gns303-172da.firebaseapp.com",
  projectId: "gns303-172da",
  storageBucket: "gns303-172da.appspot.com",
  messagingSenderId: "192562143817",
  appId: "1:192562143817:web:49a0dabb4f5810b9e39598",
  measurementId: "G-B1Q67Y4J8D",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
