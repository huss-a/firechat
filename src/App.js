import "./App.css";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import firebaseConfig from "./config/firebase-config";

import { useCollectionData } from "react-firebase-hooks/firestore";
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
