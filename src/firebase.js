import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
//   authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER,
//   appId: process.env.REACT_APP_APP_ID,
// };

const firebaseConfig = {
  apiKey: "AIzaSyDf-O7TlAVZ5RmWueU6WVXKRBrnpCdg31w",
  authDomain: "netflix-clone-900ba.firebaseapp.com",
  projectId: "netflix-clone-900ba",
  storageBucket: "netflix-clone-900ba.appspot.com",
  messagingSenderId: "588797094055",
  appId: "1:588797094055:web:d9a63d21ef210db9cc1382"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
