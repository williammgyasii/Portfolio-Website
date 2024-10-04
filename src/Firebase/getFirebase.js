// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFunctions } from "firebase/functions";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDE1otG_QGqwodwUuZlHbaURL3il53mOzA",
  authDomain: "williamgyasi-e53b0.firebaseapp.com",
  projectId: "williamgyasi-e53b0",
  storageBucket: "williamgyasi-e53b0.appspot.com",
  messagingSenderId: "310190841699",
  appId: "1:310190841699:web:62b3adf45725b3a4b1bd56",
  measurementId: "G-KCJKES1BG4",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const getFirebaseFunctions = getFunctions(app);
