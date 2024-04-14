import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCuIOmAH-GZcyxcVId7Hqpr635eMZXJ2i8",
  authDomain: "fir-reactauth-df543.firebaseapp.com",
  projectId: "fir-reactauth-df543",
  storageBucket: "fir-reactauth-df543.appspot.com",
  messagingSenderId: "262414043285",
  appId: "1:262414043285:web:2001d726b02542c5def39c",
  measurementId: "G-XX2Y3K01EQ"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth =  getAuth(app);
export const db = getFirestore(app);
