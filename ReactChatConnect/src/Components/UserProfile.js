import React from 'react';
import "./UserProfile.css";
import { useNavigate } from 'react-router-dom';

function UserProfile({ name, photoUrl, email, lastmessage }) {

  const navigate = useNavigate();
  const goToUser = (emailId) => {
    if (emailId) {
      navigate(`/${emailId}`);
    }
  };

  return (
    <div className="user-profile" onClick={() => goToUser(email)}>
      <div className="user-image">
        <img alt="" src={photoUrl} />
      </div>
      <div className="user-info">
        <div className="user-name">{name}</div>
        <p className="user-last-message">{lastmessage}</p>
      </div>
    </div>
  );
}

export default UserProfile