import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp(
    {
      apiKey: "AIzaSyBOx6AuP5m3vQrj-WNtBJ60gQGokzuvwKY",
      authDomain: "fir-testpj-f30bb.firebaseapp.com",
      projectId: "fir-testpj-f30bb",
      storageBucket: "fir-testpj-f30bb.appspot.com",
      messagingSenderId: "200687453368",
      appId: "1:200687453368:web:a01583ffa50d34b442604d",
      measurementId: "G-MJB5898SD0"
    }
  )
}

export default firebase