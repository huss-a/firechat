import firebase from "firebase/app";
import "firebase/auth";

function ChatMessage({ message }) {
  const auth = firebase.auth();
  const msgClass = auth.currentUser.uid === message.uid ? "sent" : "received";

  return (
    <div className={`message ${msgClass}`}>
      <img
        src={message.photoURL}
        alt={`${auth.currentUser.displayName.split(" ")[0]}'s pfp`}
      />
      <p>{message.text}</p>
    </div>
  );
}

export default ChatMessage;
