// Code ClickityClick Component Here
import React from 'react';
 
export default function ImageGallery(props) {
  return (
    <div className="profile-container">
      {console.log(props.delay)}
      <ul>
        <li>{props.delay}</li>
      </ul>
    </div>
  );
}
