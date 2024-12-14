import React from 'react';
import Sidebar from './Sidebar';
import "./Chatpage.css";
import Chatcontainer from './Chatcontainer'

function Chatpage({currentUser, signOut}) {
  return (
    <div className="chatpage">
      <div className="chatpage-container">
        <Sidebar currentUser={currentUser} signOut={signOut} />
        <Chatcontainer currentUser={currentUser} />
      </div>
    </div>
  );
}

export default Chatpage