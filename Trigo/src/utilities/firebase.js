import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database"; // ✅ Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyA6aWX6d5QRebgSm-mp9mCaMOY27URqGLQ",
  authDomain: "trigo11.firebaseapp.com",
  databaseURL: "https://trigo11-default-rtdb.firebaseio.com", // ✅ Important
  projectId: "trigo11",
  storageBucket: "trigo11.firebasestorage.app",
  messagingSenderId: "809506763336",
  appId: "1:809506763336:web:64345546b8210ee75dde7d",
  measurementId: "G-W0YHGV1HF5",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getDatabase(app); // ✅ Export Realtime DB
