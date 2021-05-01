import React, { useEffect, useRef, useState } from "react";
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import BadWordFilter from "bad-words";

import { useCollectionData } from "react-firebase-hooks/firestore";
import ChatMessage from "./ChatMessage";

const ChatRoom = () => {
  const auth = firebase.auth();
  const firestore = firebase.firestore();
  const messagesRef = firestore.collection("messages");
  const query = messagesRef.orderBy("createdAt", "asc").limitToLast(35);

  const [formVal, setFormVal] = useState("");
  const dummy = useRef();

  const [messages] = useCollectionData(query, { idField: "id" });
  useEffect(() => dummy.current.scrollIntoView({ behavaior: "smooth" }), [
    messages,
  ]);

  async function sendMsg(e) {
    e.preventDefault();
    const filter = new BadWordFilter();
    // if (filter.isProfane(formVal)) {
    //   setFormVal(filter.clean(formVal));
    // }
    await messagesRef.add({
      uid: auth.currentUser.uid,
      text: filter.clean(formVal),
      photoURL: auth.currentUser.photoURL,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setFormVal("");
    dummy.current.scrollIntoView({ behavaior: "smooth" });
  }

  return (
    <>
      <div className="messages">
        {messages &&
          messages.map((msg) => <ChatMessage message={msg} key={msg.id} />)}
        <div id="dummy" ref={dummy}></div>
        <form onSubmit={(e) => sendMsg(e)}>
          <input
            type="text"
            onChange={(e) => setFormVal(e.target.value)}
            value={formVal}
            className="form-control message-input mx-2"
          />
          <button
            type="submit"
            className="btn btn-success"
            disabled={formVal ? false : true}
          >
            <i className="fas fa-paper-plane" />
          </button>
        </form>
        <button
          className="btn btn-warning"
          onClick={async () => await auth.signOut()}
        >
          Sign Out 😢
        </button>
      </div>
    </>
  );
};

export default ChatRoom;
