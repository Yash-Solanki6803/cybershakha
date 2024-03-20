// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAdllvYhF7By1m0ajJAeYdEI43KJGCHMM8",
  authDomain: "shyamal-web.firebaseapp.com",
  projectId: "shyamal-web",
  storageBucket: "shyamal-web.appspot.com",
  messagingSenderId: "323951404173",
  appId: "1:323951404173:web:94d23e1a94610390612ec4",
  measurementId: "G-KZE2MZ1K4S",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// export const analytics = getAnalytics(app);
