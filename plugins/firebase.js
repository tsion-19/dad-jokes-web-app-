import firebase from 'firebase/app'
import 'firebase/firestore'
import { ref, onUnmounted } from '@nuxtjs/axios'
const firebaseConfig = {
  apiKey: "AIzaSyBiCu_w_SBI_H1sANzWBrLAqeplDU-lPMs",
  authDomain: "test-youtbe-735db.firebaseapp.com",
  projectId: "test-youtbe-735db",
  storageBucket: "test-youtbe-735db.appspot.com",
  messagingSenderId: "677651197311",
  appId: "1:677651197311:web:1f78bf9f3ae4d7fabf7e4a",
  measurementId: "G-7B4JW8Z3CK"
};

//Initialize firebase
if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig)
}
//by commenting this i got my result
// firebase.firestore.settings({ experimentalForceLongPolling: false })

const db = firebase.firestore()
const usersCollection = db.collection('users')
