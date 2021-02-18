import firebase from 'firebase/app';
import 'firebase/database'; // If using Firebase database
import 'firebase/storage';  // If using Firebase storage
import 'firebase/firestore';   // for cloud firestore
import 'firebase/auth';

// var firebaseConfig = {
//     apiKey: 'AIzaSyBmlQD8AXV-Vx7q81VjvCvzHU4kTK5ZTWA',
//     authDomain: 'react-test-92c45.firebaseapp.com',
//     databaseURL: 'https://react-test-92c45-default-rtdb.europe-west1.firebasedatabase.app',
//     projectId: 'react-test-92c45',
//     storageBucket: 'react-test-92c45.appspot.com',
//     messagingSenderId: '169054837486',
//     appId: '1:169054837486:web:d42e7dbd930d1002fb71ff'
// };

var firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
};

firebase.initializeApp(firebaseConfig);
const database = firebase.firestore();

export { database, firebase as default };