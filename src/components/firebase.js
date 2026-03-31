import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDOOzwwPBGYvG5gUVZ69BFZMkHhZZrjtZU",
  authDomain: "coral-chiller-363117.firebaseapp.com",
  projectId: "coral-chiller-363117",
  storageBucket: "coral-chiller-363117.firebasestorage.app",
  messagingSenderId: "365176715860",
  appId: "1:365176715860:web:a1a87a52f9acce4dcb0bc1",
  measurementId: "G-0ECHXNJLZC"
  
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

// ✅ Add this line to fix your import
export { app };










