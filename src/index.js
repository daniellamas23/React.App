import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
//Firebase config
const firebaseConfig = {

  apiKey: "AIzaSyDUcFP-tfmlyyemKwnvAqcQSfFADk05YLg",
  authDomain: "powergamer-ecommerce.firebaseapp.com",
  projectId: "powergamer-ecommerce",
  storageBucket: "powergamer-ecommerce.appspot.com",
  messagingSenderId: "559504780522",
  appId: "1:559504780522:web:5591c2f665a8f0440a7b93"

};
//Initialize firebase
const app = initializeApp(firebaseConfig);



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
