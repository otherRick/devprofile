// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyBApceawivaR8tmiLKHJ5MnlhLd_BOeMg0',
  authDomain: 'devprofile-57cf4.firebaseapp.com',
  projectId: 'devprofile-57cf4',
  storageBucket: 'devprofile-57cf4.firebasestorage.app',
  messagingSenderId: '720445715452',
  appId: '1:720445715452:web:b4e17bf2ae568584353879',
  measurementId: 'G-DZE3F88DL4'
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
