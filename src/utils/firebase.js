// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChvIEALXdJEeg84f8cka432uDi_PP-0OI",
  authDomain: "netflixgpt-4b3e8.firebaseapp.com",
  projectId: "netflixgpt-4b3e8",
  storageBucket: "netflixgpt-4b3e8.firebasestorage.app",
  messagingSenderId: "386226881025",
  appId: "1:386226881025:web:a949593830c2d86809b600",
  measurementId: "G-EBY4YJXYQR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();