import React, { useState,useEffect } from 'react';
import './Card.css'

// import { faTrashO } from '@fontawesome/free-font-awesome';

function Card({id, content, description, handleDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editedDescription, setEditedDescription] = useState(description);
  
  const handleEditClick = () => {
    setIsEditing(true);
  };
  
  const handleSaveClick = () => {
    setIsEditing(false);
  };
  const handleDeleteClick = () => {
    handleDelete(id);
  };

  const handleDescriptionChange = (event) => {
    setEditedDescription(event.target.value);
  };

  return (
    <div className="card" >
      <div className="card-title">{content}</div>
      {isEditing ? (
        <div className="card-description">
          <textarea
            value={editedDescription}
            onChange={handleDescriptionChange}
          />
          <button onClick={handleSaveClick}>Save</button>
        </div>
      ) : (
        <div className="card-description">
          <div>{editedDescription}</div>
          <button onClick={handleEditClick}>Edit</button>
          <button onClick={handleDeleteClick}>Delete</button>
        </div>
      )}
    </div>
  );
}

export default Card;
