import firebase from "firebase"

const firebaseConfig = {
    apiKey: "AIzaSyAchzonh8_E4dejX0HjitsARFf5s_leyVs",
    authDomain: "clone-b74a2.firebaseapp.com",
    databaseURL: "https://clone-b74a2.firebaseio.com",
    projectId: "clone-b74a2",
    storageBucket: "clone-b74a2.appspot.com",
    messagingSenderId: "575687495430",
    appId: "1:575687495430:web:925963dc0b08f9e99bd887",
    measurementId: "G-4WQS33HWZ7"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig)

  const db = firebaseApp.firestore()
  const auth = firebaseApp.auth()

  export { db, auth }