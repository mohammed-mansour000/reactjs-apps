// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child } from "firebase/database";
import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDfyCJQ8-Igv7Qa4y29cKSxa7XdoqvZZKQ",
  authDomain: "react-crud-64c50.firebaseapp.com",
  databaseURL: "https://react-crud-64c50-default-rtdb.firebaseio.com",
  projectId: "react-crud-64c50",
  storageBucket: "react-crud-64c50.appspot.com",
  messagingSenderId: "341748048735",
  appId: "1:341748048735:web:cd28b818ccd91692ebccea",
  measurementId: "G-YML2H1RG2J"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const database = getDatabase(app);

export default database;