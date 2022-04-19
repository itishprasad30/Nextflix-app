// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDiJ5gu9PSvzrh7ka905ONyyHX8HszWJVQ",
  authDomain: "netflix-app-17986.firebaseapp.com",
  projectId: "netflix-app-17986",
  storageBucket: "netflix-app-17986.appspot.com",
  messagingSenderId: "603975581700",
  appId: "1:603975581700:web:23077ef169eb6847d5f551",
  measurementId: "G-XRBGM6TF0B"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const auth = getAuth()

export default app
export { auth, db }