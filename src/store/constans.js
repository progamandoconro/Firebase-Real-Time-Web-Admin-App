import  {auth,database,initializeApp} from 'firebase/'

const config = {
    apiKey: "AIzaSyBzkakvvykR5oqjVj1EvtOY2WUN877v38s",
    authDomain: "webtest-a81dc.firebaseapp.com",
    databaseURL: "https://webtest-a81dc.firebaseio.com",
    projectId: "webtest-a81dc",
    storageBucket: "webtest-a81dc.appspot.com",
    messagingSenderId: "180737000927",
    appId: "1:180737000927:web:3d1df2cd0b631a2601b06a",
    measurementId: "G-9CB63L546Y"
}

initializeApp(config)

export const ref = database().ref()
export const firebaseAuth = auth

export const loginAuth = (email, password)=> {
    return firebaseAuth().signInWithEmailAndPassword(email, password)
}
