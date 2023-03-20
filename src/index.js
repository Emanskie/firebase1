// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAYVWPBZBCE5mTb8zjDnc1RRryTVaKxmUw",
  authDomain: "itd108---lab-act-1.firebaseapp.com",
  projectId: "itd108---lab-act-1",
  storageBucket: "itd108---lab-act-1.appspot.com",
  messagingSenderId: "233428452315",
  appId: "1:233428452315:web:8f9b789f5c826fc0b21dfe",
  measurementId: "G-9140C688BS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
console.log(app)