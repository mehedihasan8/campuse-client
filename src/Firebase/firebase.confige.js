// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //   apiKey: "AIzaSyBnv7IYOGp9FmRBs9Fg6uvXwVFTZlSqSc8",
  //   authDomain: "the-news-dragon-client-8a322.firebaseapp.com",
  //   projectId: "the-news-dragon-client-8a322",
  //   storageBucket: "the-news-dragon-client-8a322.appspot.com",
  //   messagingSenderId: "216602131933",
  //   appId: "1:216602131933:web:1723b966d00cd524bb0a34",
  apiKey: import.meta.env.VITE_apiKey,
  authDomain: import.meta.env.VITE_authDomain,
  projectId: import.meta.env.VITE_projectId,
  storageBucket: import.meta.env.VITE_storageBucket,
  messagingSenderId: import.meta.env.VITE_messagingSenderId,
  appId: import.meta.env.VITE_appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;
