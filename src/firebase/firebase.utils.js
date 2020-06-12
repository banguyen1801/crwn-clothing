import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBpemDn-ATJjzL4Bx57ScU54yIYoIAjRXU',
  authDomain: 'project-crwn.firebaseapp.com',
  databaseURL: 'https://project-crwn.firebaseio.com',
  projectId: 'project-crwn',
  storageBucket: 'project-crwn.appspot.com',
  messagingSenderId: '1007922999151',
  appId: '1:1007922999151:web:13f57406568cc1a1d0829a',
  measurementId: 'G-4R1K7WR4B9',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ promt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
