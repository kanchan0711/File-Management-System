import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBAAV9FPsO8gE7dNySvpXZaTQWGoY98Pwc",
  authDomain: "file-management-system-16240.firebaseapp.com",
  projectId: "file-management-system-16240",
  storageBucket: "file-management-system-16240.firebasestorage.app",
  messagingSenderId: "96092558835",
  appId: "1:96092558835:web:0d2f9da084a60322fb2e86",
  measurementId: "G-C8NKTTZXL3"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth,db  };
