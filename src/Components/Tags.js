import React from 'react';

function Tags(props) {
  return (
    <div className='m-0'>
      <p className='h-100 me-4 p-1 px-2' style={{ backgroundColor: '#eef0f2', borderRadius: '10px'  }}><i className={props.icon}></i>{props.tagName}</p>
    </div>
  );
}

export default Tags;