import React, { useState } from 'react';
import '../Styles/Login.css'
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useCookies } from 'react-cookie'

function Login(props) {
  const [username, setUsername] = useState("");
  const [pass, setPass] = useState("");
  const navigate = useNavigate();
  const [cookie, setCookie] = useCookies(['user'])  

  const handleClick = ()  =>  {
    const userEnteredData = {
      username,
      password: pass
    }    
    
    axios.post('http://localhost:4000/auth/login', userEnteredData)
    .then((res)  =>  {      
      const { token } = res.data;      
      setCookie('user', token, { path: '/' })    
      navigate('/');
    })    
    .catch((err)  =>  {
      console.log("Error", err.response.data.error)
      toast.error(err.response.data.error)
    })
  }

  return (
    <div className='main-div-login container-fluid p-5'>      
      <div className='h-100 d-flex p-5 align-items-center'>
        <div className='inner-div-login p-5 row w-100 h-100 d-flex align-items-center'>
          <div className='col-lg-9 d-flex justify-content-center flex-column '>
            <h1 className='text-white'>SOCIAL PLATFORM</h1>
            <p className='text-white'>Socialize. Network. Enjoy.</p>
          </div>
          <div className='login-card p-5 col-lg-3 d-flex flex-column bg-dark'>
            <h2 style={{ color: '#ffbc37' }}>Login Now</h2>
            <p className='text-light'>Welcome to Social Platform!</p>
            <input className='login-input mb-3' type='text' placeholder='Username' value={username} onChange={(e)  =>  setUsername(e.target.value)} />
            <input className='login-input mb-1' type='text' placeholder='Password' value={pass} onChange={(e)  =>  setPass(e.target.value)} />
            <a href='' className='forgot-pass mb-3'>Forgot Password</a>
            <button className='login-button' onClick={()  => handleClick()}>Login</button>
            <a href='' className='forgot-pass mb-3'>Create an Account</a>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}

export default Login;