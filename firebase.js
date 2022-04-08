// Import the functions you need from the SDKs you need
import { initializeApp , getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDXlHQhJ5C3wSVTTVVd31hW6KbkpYRa9eU",
  authDomain: "insta-2-26c9a.firebaseapp.com",
  projectId: "insta-2-26c9a",
  storageBucket: "insta-2-26c9a.appspot.com",
  messagingSenderId: "657428542972",
  appId: "1:657428542972:web:ecfabb0b6b3b83d4202e79"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore()
const storage = getStorage()
export { app, db, storage }