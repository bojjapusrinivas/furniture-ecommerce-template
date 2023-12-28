
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyCpGoRfIBO9nRMNoBUF8Lq0h2HYpSAZzKA",
  authDomain: "multimart-e689b.firebaseapp.com",
  projectId: "multimart-e689b",
  storageBucket: "multimart-e689b.appspot.com",
  messagingSenderId: "814884907073",
  appId: "1:814884907073:web:637c24d890099900fe3ec0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)
export default app