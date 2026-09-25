import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1UXQ__7lBW_FiDIbLjlsz8lWJWwyr85Q",
  authDomain: "m-to-m-bc172.firebaseapp.com",
  projectId: "m-to-m-bc172",
  storageBucket: "m-to-m-bc172.firebasestorage.app",
  messagingSenderId: "787761267311",
  appId: "1:787761267311:web:38b8512c36b14a3557039a",
  measurementId: "G-ZEP3FM90S9"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
