import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCLY6BGTVa5nqC9cLDFAy55HuSdKReAh4U",
  authDomain: "e-commerce-f386e.firebaseapp.com",
  projectId: "e-commerce-f386e",
  storageBucket: "e-commerce-f386e.appspot.com",
  messagingSenderId: "490713788465",
  appId: "1:490713788465:web:2643d3ebfd774cfb5a6510"
};

// Initialize Firebase
initializeApp(firebaseConfig);




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
