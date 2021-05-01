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
    <>
      <h1 style={h2Styles}>Firechat 🔥</h1>
      <button onClick={signInWithGoogle} className="btn btn-primary">
        Sign in with Google <i className="fab fa-google" />
      </button>
    </>
  );
}

export default SignIn;
