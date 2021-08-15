import firebase from "firebase/app";
import "firebase/auth";

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyC0CzRnJDGzz1KeOtLO2bqEUe0-jXCRLXo",
    authDomain: "chat-606f8.firebaseapp.com",
    projectId: "chat-606f8",
    storageBucket: "chat-606f8.appspot.com",
    messagingSenderId: "692469558242",
    appId: "1:692469558242:web:094735fc5000397d96a7bb"
}).auth();