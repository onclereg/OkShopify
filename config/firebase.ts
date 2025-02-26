// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDlFSIwPcHCjtp6Pq183Wg74qvZJuKB1ZM",
  authDomain: "okshopify.firebaseapp.com",
  projectId: "okshopify",
  storageBucket: "okshopify.firebasestorage.app",
  messagingSenderId: "576173495683",
  appId: "1:576173495683:web:f8f24abcecfb63362552b6",
  measurementId: "G-CTC8R54H5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);