import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-roFhyO670YF2714tOnEb3TzOYhbG0GY",
  authDomain: "budget-manager-16502.firebaseapp.com",
  projectId: "budget-manager-16502",
  storageBucket: "budget-manager-16502.firebasestorage.app",
  messagingSenderId: "977094079595",
  appId: "1:977094079595:web:9bddfc03ed0959f45d6d2e",
  measurementId: "G-LVVRVH38W1",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
