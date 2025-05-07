import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyAlsTjNOoeVYXK4sUdi3RGRN-4RmyWUwA8",
  authDomain: "projet-react-b0a34.firebaseapp.com",
  projectId: "projet-react-b0a34",
  storageBucket: "projet-react-b0a34.firebasestorage.app",
  messagingSenderId: "328134172427",
  appId: "1:328134172427:web:5707634d7cdb657f80cc0e"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;