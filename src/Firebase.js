import firebase from 'firebase'

let firebaseApp =  firebase.initializeApp({
    apiKey: "AIzaSyDBGdkd6yz_shashEWTmiITrKmjlOpPCJ8",
    authDomain: "car-parking-c66bc.firebaseapp.com",
    projectId: "car-parking-c66bc",
    storageBucket: "car-parking-c66bc.appspot.com",
    messagingSenderId: "465885946430",
    appId: "1:465885946430:web:fc7ff7c5bf3f21df99276f"
    })
  
const db = firebaseApp.firestore();

export { db }