import firebase from "firebase/compat/app";
import { initializeApp } from "firebase/app";
import "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqhFoggYgOWlkotKBYuGBcFFh7ho-0efA",
  authDomain: "tkshop-285ec.firebaseapp.com",
  projectId: "tkshop-285ec",
  storageBucket: "tkshop-285ec.appspot.com",
  messagingSenderId: "956084608965",
  appId: "1:956084608965:web:6aaef5c0bfa4bb1b29f5ac",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const initFirebase = () => {
  return app;
};
