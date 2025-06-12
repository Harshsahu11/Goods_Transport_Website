import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


const firebaseConfig = {
  apiKey: "AIzaSyAckNST9QwPP20f2c6R24GqGzhV7sp5FUU",
  authDomain: "myfirstproject-dafbc.firebaseapp.com",
  projectId: "myfirstproject-dafbc",
  storageBucket: "myfirstproject-dafbc.firebasestorage.app",
  messagingSenderId: "70298968396",
  appId: "1:70298968396:web:6a03033c9fdc4046966fe9"
};

const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}