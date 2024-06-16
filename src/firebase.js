// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBm4FbhY5ioL_dyyoK5vnUTWc6Ko6iT4YA",
  authDomain: "shop-5f39f.firebaseapp.com",
  projectId: "shop-5f39f",
  storageBucket: "shop-5f39f.appspot.com",
  messagingSenderId: "1049166814922",
  appId: "1:1049166814922:web:bd682b489671eff0215e33",
  measurementId: "G-ZR62Z7GB70"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;