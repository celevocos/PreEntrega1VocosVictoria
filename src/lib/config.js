//en este archivo ponemos la configuracion de la base de datos
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCFEsuKffZfll_j0KvF1dgTINeg5Xva_hc",
  authDomain: "productos-d4cdd.firebaseapp.com",
  projectId: "productos-d4cdd",
  storageBucket: "productos-d4cdd.appspot.com",
  messagingSenderId: "767589998249",
  appId: "1:767589998249:web:9ac94f28b54489ee3613b8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);