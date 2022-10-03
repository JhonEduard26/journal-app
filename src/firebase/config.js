import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBw02ZWMY6ytqxic0Tj_rrNhSRDi708Sf0",
  authDomain: "journal-app-67276.firebaseapp.com",
  projectId: "journal-app-67276",
  storageBucket: "journal-app-67276.appspot.com",
  messagingSenderId: "578961613569",
  appId: "1:578961613569:web:58070ad1b97ecbedf7b100"
}

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig)
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)