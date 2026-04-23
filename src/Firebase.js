import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCeBvPvP_wKGEYxMEo3xVe9LFr1ygUkhpU",
  authDomain: "fir-react-authentication-4c77a.firebaseapp.com",
  projectId: "fir-react-authentication-4c77a",
  storageBucket: "fir-react-authentication-4c77a.firebasestorage.app",
  messagingSenderId: "381298001265",
  appId: "1:381298001265:web:29247d52adc62f419be2d0",
  measurementId: "G-F5BM14L73D"
};


const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app)