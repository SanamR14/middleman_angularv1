// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCMBx3Cncn5xyP6PxtNILvup3iIH0974w",
  authDomain: "middleman-742d7.firebaseapp.com",
  projectId: "middleman-742d7",
  storageBucket: "middleman-742d7.appspot.com",
  messagingSenderId: "699537353194",
  appId: "1:699537353194:web:2e213fcf7f2692bd0faa93",
  measurementId: "G-4V0MP2ZY1D"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);