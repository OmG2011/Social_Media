import React from 'react';

function Post(props) {
  return (
    <div className='mt-5 p-2' style={{ textAlign: 'left', backgroundColor: 'white', borderRadius: '10px' }}>
      <div className='d-flex justify-content-start align-items-center p-2'>
        <img className='me-3' src={props.profileImgSrc} style={{ width: '15%', borderRadius: '50%' }} alt="" />
        <div style={{ textAlign: 'left' }}>
          <h3>{props.name}<i className="bi bi-dot"></i><span style={{ fontSize: '20px', fontWeight: 'normal' }}>{props.time}</span></h3>
          <p>{props.tagline}</p>
        </div>
      </div>
      <div className='p-2'>
        <p>{props.content}</p>
        <img className='w-100' style={{ borderRadius: '10px', maxWidth: '600px', width: 'auto', height: 'auto' }} src={props.contentImgSrc} alt="" />
        <div className="d-flex justify-content-between align-items-center ">
          <p className='mt-4'><i className="bi bi-hand-thumbs-up-fill me-2"></i><span className='me-2'>Liked ({props.likes})</span><i className="bi bi-chat-fill me-2"></i><span>Comments ({props.comments})</span></p>
          <p className='mt-4'><i className="bi bi-send-fill me-2"></i>Share ({props.shares})</p>
        </div>
      </div>
    </div>
  );
}

export default Post;