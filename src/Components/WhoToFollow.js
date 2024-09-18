import React from 'react';

function WhoToFollow(props) {
  return (
    <div className='d-flex justify-content-between align-items-center m-0'>
      <div className='d-flex align-items-center mb-3'>
        <img className='me-3' src={props.imgSrc} style={{ width: '20%', borderRadius: '50%' }} alt="" />
        <div style={{ textAlign: 'left' }}>
          <h5 className='m-0 p-0'>{props.name}</h5>
          <p className='m-0 p-0'>{props.job}</p>
        </div>
      </div>
      <h5 className='m-0 p-0'><i className="bi bi-plus-circle-fill"></i></h5>
    </div>
  );
}

export default WhoToFollow;