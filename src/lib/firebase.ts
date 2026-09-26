import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC1UXQ__7lBW_FiDlBljlsz8lWJwyvr85Q",
  authDomain: "m-to-m-bc172.firebaseapp.com",
  projectId: "m-to-m-bc172",
  storageBucket: "m-to-m-bc172.appspot.com",
  messagingSenderId: "787761267311",
  appId: "1:787761267311:web:38b8512c36b14a3557039a",
};

let app = null;
let db = null;

// SOLO en cliente (evita error en Vercel SSR)
if (typeof window !== "undefined") {
  app = initializeApp(firebaseConfig);
  db = getFirestore(app);
}

export { db };
