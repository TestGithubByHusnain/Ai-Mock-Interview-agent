
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyCIla4sYp44uYM03s3N7M8ydLdV9EPHu3Y",
  authDomain: "prepwise-b71ae.firebaseapp.com",
  projectId: "prepwise-b71ae",
  storageBucket: "prepwise-b71ae.firebasestorage.app",
  messagingSenderId: "236727489595",
  appId: "1:236727489595:web:769cebc6f0a96fcbda381e",
  measurementId: "G-DWBMBBGZT6"
};

// Initialize Firebase
const app =!getApps.length ? initializeApp(firebaseConfig) :getApp();
export const auth = getAuth(app);
export const db= getFirestore(app);