import { initializeApp } from 'firebase/app'
import { getFirestore, collection } from 'firebase/firestore'
// ... other firebase imports

export const firebaseApp = initializeApp({
    apiKey: "AIzaSyDX6Mc_BaPVhzs4imCf63qikau9LgDJTaU",
    authDomain: "contrats-7e085.firebaseapp.com",
    projectId: "contrats-7e085",
    storageBucket: "contrats-7e085.appspot.com",
    messagingSenderId: "637749977259",
    appId: "1:637749977259:web:27cecc7797d6d51ee517ee",
    measurementId: "G-RMQS3MCHS3"
})

// used for the firestore refs
const db = getFirestore(firebaseApp)

// here we can export reusable database references
export const eventsRef = collection(db, 'contrats')
