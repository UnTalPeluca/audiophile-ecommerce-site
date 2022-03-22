import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseApp = initializeApp({
    apiKey: "AIzaSyC8heY1z_ZG16_r5byfZEe0Fz4KPBcrenk",
    authDomain: "audiophile-ecommerce-c2e23.firebaseapp.com",
    projectId: "audiophile-ecommerce-c2e23",
    storageBucket: "audiophile-ecommerce-c2e23.appspot.com",
    messagingSenderId: "374821069204",
    appId: "1:374821069204:web:e10e0c8a47cae2c94cef81"
})

const db = getFirestore();
export default db