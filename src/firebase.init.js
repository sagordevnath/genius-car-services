// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCOlwqJfCeRFxYEHTPiEsl7cT6qutwSw6A",
  authDomain: "genius-car-services-c8458.firebaseapp.com",
  projectId: "genius-car-services-c8458",
  storageBucket: "genius-car-services-c8458.appspot.com",
  messagingSenderId: "800831118613",
  appId: "1:800831118613:web:d329d8387f1309ee061d1c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;