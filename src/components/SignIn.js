import firebase from "firebase/app";
import "firebase/auth";

function SignIn() {
  const auth = firebase.auth();
  function signInWithGoogle() {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(googleProvider);
  }

  const h2Styles = {
    color: "white",
  };
  return (
    <div className="sign-in">
      <h1 style={h2Styles} className="mb-4">Firechat 🔥</h1>
      <button onClick={signInWithGoogle} className="btn btn-primary mt-4">
        Sign in with Google <i className="fab fa-google" />
      </button>
    </div>
  );
}

export default SignIn;
