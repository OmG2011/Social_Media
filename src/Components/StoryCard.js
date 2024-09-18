import React from 'react';
import '../Styles/StoryCard.css'

function StoryCard(props) {
  return (
    <div className='main-div me-2'>
      <img src={props.imgUrl} className='bg-img' alt="" />
      <p>{props.name}</p>
    </div>
  );
}

export default StoryCard;