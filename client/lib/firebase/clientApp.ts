import firebase from "firebase/compat/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/performance";

// Your web app's Firebase configuration
const clientCredentials = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

export const initFirebase = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(clientCredentials);
    console.log(firebase.apps);
    console.log("😀 Firebase was successfully init");
  }
};
