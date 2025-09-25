import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBG3J2fwndUQN8LkjDgO5ubsSrdBjR6UrA",
  authDomain: "tastybite-7991b.firebaseapp.com",
  projectId: "tastybite-7991b",
  storageBucket: "tastybite-7991b.firebasestorage.app",
  messagingSenderId: "482185723562",
  appId: "1:482185723562:web:ea07bca17e071878d8dad3",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
