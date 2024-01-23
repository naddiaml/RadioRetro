import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBFyum19T-cukVgKfCanVWukNaU5hmSSYw",
    authDomain: "radioretro-9d1cd.firebaseapp.com",
    projectId: "radioretro-9d1cd",
    storageBucket: "radioretro-9d1cd.appspot.com",
    messagingSenderId: "736006286745",
    appId: "1:736006286745:web:486ae020294a34607c7708"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);