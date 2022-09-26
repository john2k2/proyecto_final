import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDMcaiQoFoVNn9V95VYpUtnDq16SzQOL80",
  authDomain: "proyecto-coder-60ad5.firebaseapp.com",
  projectId: "proyecto-coder-60ad5",
  storageBucket: "proyecto-coder-60ad5.appspot.com",
  messagingSenderId: "614795929719",
  appId: "1:614795929719:web:20eff4d4991ab9dfc2fe72",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
