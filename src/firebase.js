// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBksVSGLrLCMDGBffTzNQ6ddNzGr83tNEo",
  authDomain: "create-report-c8e81.firebaseapp.com",
  projectId: "create-report-c8e81",
  storageBucket: "create-report-c8e81.firebasestorage.app",
  messagingSenderId: "1012098757562",
  appId: "1:1012098757562:web:732b44ccb8009c1eb8e383",
  measurementId: "G-9KQ6E7QMV9",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const storage = getStorage(app);
