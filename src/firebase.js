import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";


const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "safetify-f997a.firebaseapp.com",
  projectId: "safetify-f997a",
  storageBucket: "safetify-f997a.appspot.com",
  messagingSenderId: "997484910423",
  appId: "1:997484910423:web:f02b055552f33d66b0d012"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth();
export const storage = getStorage(app);
