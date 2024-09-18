import React from 'react';
import '../Styles/PageNotFound.css'
import { useNavigate } from 'react-router-dom';

function PageNotFound(props) {
  const navigate = useNavigate();

  return (
    <div className='p-5' style={{ backgroundColor: '#183d8b', backgroundSize: 'cover', height: '100vh' }}>
      <div className='inner-div-pageNotFound h-100' style={{ borderRadius: '20px' }}>
        <div className='p-5 d-flex flex-column justify-content-between h-100'>
          <div>
            <h1>404</h1>
            <h3>PAGE NOT FOUND</h3>
            <p>The page you are looking for might have been removed,<br /> had it's name changed, or might be temporarily unavailable!</p>
          </div>
          <div>
            <button className='p-3' onClick={() =>  navigate('/')}>GO TO HOMEPAGE</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;