import React from 'react';
import '../Styles/Header.css'
import MenuDropdown from './MenuDropdown';

function Header() {
  return (
    <div className='header_div m-0 p-0' style={{ backgroundColor: 'white' }}>
      <div className='row p-2 m-0'>
        <div className='col-6 d-flex justify-content-center'>
          <span className='text-bg-primary p-2 px-3 rounded me-2 '>  <i className="bi bi-megaphone-fill"></i></span>
          <div className='search d-flex justify-content-center '>
            <i className="bi bi-search me-2"></i>
            <input type='text' placeholder='Search' className='specific-search-box border-0' style={{ backgroundColor: '#eef0f2' }} />
          </div>
        </div>
        <div className='menu-options col-6'>
          <div className='row'>
            <div className='col-12 text-end p-0'>
              <div className='py-2'>
                <div className='p-0 m-0' style={{ position: 'relative', display: 'inline-block' }}>
                  <button className='nav-menu me-5'>Demo <i className="bi bi-chevron-down"></i></button>
                  <div className="dropdown-content m-0 p-2 bg-white w-auto">
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                  </div>
                </div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <button className='nav-menu me-5' >Pages <i className="bi bi-chevron-down"></i></button>
                  <div className="dropdown-content m-0 p-2 bg-white w-auto">
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                  </div>
                </div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <button className='nav-menu me-5'>Account <i className="bi bi-chevron-down"></i></button>
                  <div className="dropdown-content m-0 p-2 bg-white w-auto">
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                  </div>
                </div>
                <div style={{ position: 'relative', display: 'inline-block' }}>
                  <button className='nav-menu me-5'>My Network <i className="bi bi-chevron-down"></i></button>
                  <div className="dropdown-content m-0 p-2 bg-white w-auto">
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                    <hr className='m-0 p-0 mb-1' />
                    <p className='m-0 p-0 mb-1'>Home Default</p>
                  </div>
                </div>
                <span className='icons me-1 px-2 '><i className="bi bi-chat-left-dots"></i></span>
                <span className='icons me-1 px-2'><i className="bi bi-gear-fill"></i></span>
                <span className='icons me-1 px-2'><i className="bi bi-bell-fill"></i></span>
                <span className='icons me-1 px-2  profile-div'> <img className='profile' src='https://images.sftcdn.net/images/t_app-cover-l,f_auto/p/e76d4296-43f3-493b-9d50-f8e5c142d06c/2117667014/boys-profile-picture-screenshot.png' alt="" />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;