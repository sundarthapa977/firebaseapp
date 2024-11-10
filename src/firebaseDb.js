import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAdonkjtvyDCrQdb1-NQihiUnw0089Jtec",
    authDomain: "subscriptions-aa84a.firebaseapp.com",
    projectId: "subscriptions-aa84a",
    storageBucket: "subscriptions-aa84a.firebasestorage.app",
    messagingSenderId: "571518894061",
    appId: "1:571518894061:web:8d27c0b4e0bac29763b1e4"
};

const db = firebase.initializeApp(firebaseConfig);
export default db.firestore();