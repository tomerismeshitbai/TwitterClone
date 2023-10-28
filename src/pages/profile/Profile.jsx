import React, { useState } from 'react';
import './profile.css';
import Navbar from '../../components/navbar/Navbar';
const Profile = () => {
  const [profile, setProfile] = useState({
    name: 'Meshitbai Tomeris',
    birthday: '19/12/2003',
    username:'tomeris'
  });

  const [isEditing, setIsEditing] = useState(false);
  const [editedName, setEditedName] = useState(profile.name);
  const [editedUserName, setEditedUserName] = useState(profile.username);
  const [editedBirthday, setEditedBirthday] = useState(profile.birthday);

  const handleNameChange = (e) => {
    setEditedName(e.target.value);
  };

  
  const handleUserNameChange = (e) => {
    setEditedUserName(e.target.value);
  };

  const handleBirthdayChange = (e) => {
    setEditedBirthday(e.target.value);
  };

  const handleSave = () => {
    setProfile({
      name: editedName,
      birthday: editedBirthday,
      username: editedUserName,
    });
    setIsEditing(false);
  };

  return (
   <div>  <Navbar/>
    <div className="profile-container">
       
      <h2>User Profile</h2>
      {isEditing ? (
        <div className="edit-profile">
          <label>
            Name:
            <input type="text" value={editedName} onChange={handleNameChange} />
          </label>
          <label>
            Username:
            <input type="text" value={editedUserName} onChange={handleUserNameChange} />
          </label>
          <label>
            Birthday:
            <input type="text" value={editedBirthday} onChange={handleBirthdayChange} />
          </label>
          <button onClick={handleSave}>Save</button>
        </div>
      ) : (
        <div className="display-profile">
          <p>
            <strong>Name:</strong> {profile.name}
          </p>
          <p>
            <strong>Username:</strong> {profile.username}
          </p>
          <p>
            <strong>Birthday:</strong> {profile.birthday}
          </p>
          <button onClick={() => setIsEditing(true)}>Edit Profile</button>
        </div>
      )}
    </div>
    </div>
  );
};

export default Profile;
