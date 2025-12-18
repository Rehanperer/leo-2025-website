import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

// Debug: Validate Config
if (typeof window !== "undefined" && !firebaseConfig.projectId) {
  console.error("FIREBASE INIT ERROR: Missing projectId. Check Vercel Environment Variables.", firebaseConfig);
}

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);

// Use initializeFirestore to enable long polling (fixes network hangs)
import { initializeFirestore } from "firebase/firestore";
const db = initializeFirestore(app, { experimentalForceLongPolling: true });

const storage = getStorage(app);

export { app, auth, db, storage };
