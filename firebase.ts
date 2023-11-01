import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

const firebaseConfig = {
  apiKey: "AIzaSyB5AGtp3GY5LVLraxKiJV5kIjov1jvFyTE",
  authDomain: "multilingual-saas-chat-app.firebaseapp.com",
  projectId: "multilingual-saas-chat-app",
  storageBucket: "multilingual-saas-chat-app.appspot.com",
  messagingSenderId: "529476912908",
  appId: "1:529476912908:web:d56c14899783a684b26b29",
};
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);
export { db, auth, functions };
