import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAkp2TPECkCyD9o_9M6Q3Mihvp2Jf_5COg",
    authDomain: "ten-bala.firebaseapp.com",
    projectId: "ten-bala",
    storageBucket: "ten-bala.appspot.com",
    messagingSenderId: "764376093225",
    appId: "1:764376093225:web:41b93eeaa8bc70f6968238",
    measurementId: "G-K1SHMWLDWF"
  };


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
