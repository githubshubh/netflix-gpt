// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBG6_XzpWUgFuSKX5X41JbutyaCXYHEnbo",
  authDomain: "netfilxgpt-3e701.firebaseapp.com",
  projectId: "netfilxgpt-3e701",
  storageBucket: "netfilxgpt-3e701.firebasestorage.app",
  messagingSenderId: "451175441888",
  appId: "1:451175441888:web:b37b7a5936b45f8332b785",
  measurementId: "G-ZXLNVNRJNZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);