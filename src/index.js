import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from '@firebase/app';
import '@firebase/firestore';
import { FirestoreProvider } from 'react-firestore';

const config = {
    apiKey: "AIzaSyCP3J2Me6sedZyqdQ_X0VO2eGHNvwAe9Ac",
    authDomain: "react-test-app-252223.firebaseapp.com",
    databaseURL: "https://react-test-app-252223.firebaseio.com",
    projectId: "react-test-app-252223",
    storageBucket: "react-test-app-252223.appspot.com",
    messagingSenderId: "721529444512",
    appId: "1:721529444512:web:9a4729b888f66fe5ded1c5"
};

firebase.initializeApp(config);

ReactDOM.render(
   <FirestoreProvider firebase={firebase}>
        <App />
    </FirestoreProvider>,
    document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
