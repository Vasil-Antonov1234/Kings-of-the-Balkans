// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrjv6R9FX_-l2MvoUBkg-nR_X9NHh4efc",
  authDomain: "kings-of-the-balkans-storage.firebaseapp.com",
  projectId: "kings-of-the-balkans-storage",
  storageBucket: "kings-of-the-balkans-storage.firebasestorage.app",
  messagingSenderId: "658573749520",
  appId: "1:658573749520:web:f795460d24681ea180c995"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);

export const auth = getAuth();