// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCuIOmAH-GZcyxcVId7Hqpr635eMZXJ2i8",
  authDomain: "fir-reactauth-df543.firebaseapp.com",
  projectId: "fir-reactauth-df543",
  storageBucket: "fir-reactauth-df543.appspot.com",
  messagingSenderId: "262414043285",
  appId: "1:262414043285:web:2001d726b02542c5def39c",
  measurementId: "G-XX2Y3K01EQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
