import React, {useEffect, useRef, useState} from 'react';
import "./Chatcontainer.css";
import img from "../Media/user.jpg";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SendIcon from "@mui/icons-material/Send";
import InsertEmoticonIcon from "@mui/icons-material/InsertEmoticon";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import ChatMessage from './ChatMessage';
import EmojiPicker from "emoji-picker-react";
import { useParams } from 'react-router-dom';
import db from "../firebase";
import firebase from "firebase";

function Chatcontainer({currentUser}) {

  const [message,setMessage]=useState('');
  const [openEmojiBox, setOpenEmojiBox]=useState(false);
  const {emailID} = useParams();

  const [chatUser, setChatUser]=useState({});

  const [chatMessages, setChatMessages]=useState([]);

  const chatBox= useRef(null)

  useEffect(()=>{
    const getUser=async () =>{
      const data = await db.collection("users").doc(emailID).onSnapshot((snapshot)=>{
        setChatUser(snapshot.data());
      })
    }

    const getMessages = async ()=>{
      const data = await db.collection("chats").doc(emailID).collection("message").orderBy("timeStamp",'asc').onSnapshot((snapshot)=>{
        let messages = snapshot.docs.map((doc)=> doc.data())

        let newMessage=messages.filter((message) => message.senderEmail === (currentUser.email || emailID) || message.receiverEmail === (currentUser.email || emailID));

        setChatMessages(newMessage);

      });
    }

    getUser();
    getMessages();

  },[emailID]);

  useEffect(()=>{
      chatBox.current.addEventListener("DOMNodeInserted",(event)=>{
         const {currentTarget: target}=event;
         target.scroll({top:target.scrollHeight, behavior: "smooth"})
      })

  },[chatMessages])
  
  console.log(message);

  const send = (e)=>{
     e.preventDefault();

     if(emailID){
        let payload = {
            text:message,
            senderEmail:currentUser.email,
            receiverEmail:emailID,
            timeStamp:firebase.firestore.Timestamp.now(),
        }

        // senders
        db.collection('chats').doc(currentUser.email).collection("message").add(payload);
        
        //recivers

        db.collection('chats').doc(emailID).collection("message").add(payload);

        db.collection("friendList").doc(currentUser.email).collection("list").doc(emailID).set({
            email:chatUser.email,
            fullName:chatUser.fullName,
            photoURL:chatUser.photoURL,
            lastMessage:message
        });

        
        db.collection("friendList")
          .doc(emailID)
          .collection("list")
          .doc(currentUser.email)
          .set({
            email: currentUser.email,
            fullName: currentUser.fullName,
            photoURL: currentUser.photoURL,
            lastMessage: message,
          });
        
          setMessage("");
     }
  }



//    const handleEmojiClick = (event, emojiObject) => {
//      console.log(emojiObject);
//      ;
//      setMessage((message + emojiObject.emoji));
//    };

  return (
    <div className="chat-container">
      <div className="chat-container-header">
        <div className="chat-user-info">
          <div className="chat-user-img">
            <img src={chatUser?.photoURL} alt="" />
          </div>
          <p>{chatUser?.fullName}</p>
        </div>

        <div className="chat-container-header-btn">
          <MoreVertIcon />
        </div>
      </div>
      <div className="chat-display-container" ref={chatBox}>
        {chatMessages.map((message) => (
          <ChatMessage
            message={message.text}
            time={message.timeStamp}
            sender={message.senderEmail}
          />
        ))}
      </div>

      <div className="chat-input">
        {openEmojiBox && (
          <EmojiPicker
            onEmojiClick={(emojiObject, event) =>
              setMessage(message + emojiObject.emoji)
            }
          />
        )}

        <div className="chat-input-btn">
          <InsertEmoticonIcon onClick={() => setOpenEmojiBox(!openEmojiBox)} />
          <AttachFileIcon />
        </div>
        <form onSubmit={send}>
          <input
            type="text"
            placeholder="Type a Message"
            value={message}
            onChange={(e) => {
              setMessage(e.target.value);
            }}
          />
        </form>
        <div className="chat-input-send-btn" onClick={send}>
          <SendIcon />
        </div>
      </div>
    </div>
  );
}

export default Chatcontainer;