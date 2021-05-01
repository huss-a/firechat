// firebase
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// misc
import "./App.css";
import firebaseConfig from "./config/firebase-config";

// Components
import ChatRoom from "./components/ChatRoom";
import SignIn from "./components/SignIn";

// firebase react hooks
import { useAuthState } from "react-firebase-hooks/auth";

firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();

function App() {
  const [user] = useAuthState(auth);
  return (
    <div className="App">
      <section>{user ? <ChatRoom /> : <SignIn />}</section>
    </div>
  );
}

export default App;
