import React from 'react';

function MenuDropdown(props) {
  const displayStyle = props.dis ? 'none' : 'block';
  console.log(displayStyle)

  return (
    <div className="m-0 p-3 mt-2 bg-white w-auto" style={{ position: 'absolute', display: displayStyle }}>
      <p className='m-0 p-0 mb-2'>Home Default</p>
      <p className='m-0 p-0 mb-2'>Home Default</p>
      <p className='m-0 p-0 mb-2'>Home Default</p>
      <p className='m-0 p-0 mb-2'>Home Default</p>
      <p className='m-0 p-0 mb-2'>Home Default</p>
    </div>
  );
}

export default MenuDropdown;
