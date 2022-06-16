import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
const config = {
  apiKey: "AIzaSyBPwCN4wsHDkeKmRiyyEWLQXrFHmn-sNCA",
  authDomain: "bingelist-87391.firebaseapp.com",
  projectId: "bingelist-87391",
  storageBucket: "bingelist-87391.appspot.com",
  messagingSenderId: "974696066805",
  appId: "1:974696066805:web:6bc67f707fdc76a6f69fbc"
};

firebase.initializeApp(config);

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

function login() {
    return auth.signInWithPopup(provider);
}

function logout() {
    return auth.signOut();
}

export {auth, login, logout };