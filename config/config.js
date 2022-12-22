import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';


const firebaseConfig = {
  apiKey: "AIzaSyDV09EoDjwGt5etYh2r7DMKjTa96tyUORc",
  authDomain: "unspokencraft.firebaseapp.com",
  databaseURL: "https://unspokencraft-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "unspokencraft",
  storageBucket: "unspokencraft.appspot.com",
  messagingSenderId: "396778165535",
  appId: "1:396778165535:web:f1ed97b426717a7efd8c2a",
  measurementId: "G-52RM63N3L9"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();


export { auth, db ,storage};