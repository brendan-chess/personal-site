// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEFcTTNy8xijLQeb_3MXjdWPVV2jYa6x8",
  authDomain: "personal-site-280c7.firebaseapp.com",
  projectId: "personal-site-280c7",
  storageBucket: "personal-site-280c7.appspot.com",
  messagingSenderId: "20024783516",
  appId: "1:20024783516:web:cf743ffcbf060e9ddbb359",
  measurementId: "G-4YDXT0641V"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const storage = getStorage(firebaseApp);