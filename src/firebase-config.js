import { initializeApp } from "firebase/app";
import { getFirestore } from '@firebase/firestore'
import { apiKeyCont } from '.api-storer.js'

/*ESTA INFO SENSIBLE, LO MEJOR ES NO MANDARLA ASI, SINO INYECTARLA DESDE OTRO ARCHIVO, SUPOINGO QUE CON ALGUN TIPO DE ENCRIPTACION*/
const firebaseConfig = {
  apiKey: apiKeyCont,
  authDomain: "learn-react-firebase-3f0bc.firebaseapp.com",
  projectId: "learn-react-firebase-3f0bc",
  storageBucket: "learn-react-firebase-3f0bc.appspot.com",
  messagingSenderId: "517103568570",
  appId: "1:517103568570:web:376b510f2c0af421082483",
  measurementId: "G-14Z279VJ4H"
};


// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)