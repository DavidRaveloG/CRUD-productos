
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBCKHxhQ6IsNnfU4ypTpk6XOXZUb8slQss",
  authDomain: "financeproducts.firebaseapp.com",
  projectId: "financeproducts",
  storageBucket: "financeproducts.appspot.com",
  messagingSenderId: "835107269153",
  appId: "1:835107269153:web:6b9ad25ea1a8165bd3d160"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);