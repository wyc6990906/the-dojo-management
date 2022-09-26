import firebase from "firebase/app";
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyDAxGVZ53Km46O0mtesOcvgSEEdtVkj7Jk",
  authDomain: "thedojoste.firebaseapp.com",
  projectId: "thedojoste",
  storageBucket: "thedojoste.appspot.com",
  messagingSenderId: "300421687195",
  appId: "1:300421687195:web:d42c1a5faed13e1beea33e"
};


//init firebase
firebase.initializeApp(firebaseConfig)

//init services
// to interrupt online database
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()

//set timestamp
const timestamp = firebase.firestore.Timestamp

export {projectFirestore, projectAuth, timestamp}
