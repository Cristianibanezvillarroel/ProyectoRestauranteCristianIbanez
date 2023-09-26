import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtcPc3L6HX1AeHuVxy5p0vaKJHKov2Olk",
  authDomain: "proyectorestaurante-dbb6e.firebaseapp.com",
  projectId: "proyectorestaurante-dbb6e",
  storageBucket: "proyectorestaurante-dbb6e.appspot.com",
  messagingSenderId: "215698807507",
  appId: "1:215698807507:web:ebc00402e308b059895226",
  measurementId: "G-DLXYZZ6JFB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);