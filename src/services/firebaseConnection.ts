import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyADSWDkyPBUWyFr-KSg5BMrnu3EgkT1R2I",
  authDomain: "reactlinks-4a895.firebaseapp.com",
  projectId: "reactlinks-4a895",
  storageBucket: "reactlinks-4a895.firebasestorage.app",
  messagingSenderId: "589360717612",
  appId: "1:589360717612:web:57083b1e05599b82b69689"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);