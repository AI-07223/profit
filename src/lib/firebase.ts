import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getAnalytics, isSupported } from 'firebase/analytics';

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDCfoEg1HRkf2LeRCnVYglchYk-k0DYgrg",
  authDomain: "react-app-ed334.firebaseapp.com",
  projectId: "react-app-ed334",
  storageBucket: "react-app-ed334.firebasestorage.app",
  messagingSenderId: "318003014018",
  appId: "1:318003014018:web:606dbaa2c86de10203c79b",
  measurementId: "G-CYJQS9NVFY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);

// Initialize Analytics only in client-side environment
let analytics = null;
if (typeof window !== 'undefined') {
  isSupported().then((supported) => {
    if (supported) {
      analytics = getAnalytics(app);
    }
  });
}

// Export the app and analytics for potential future use
export { app, analytics };