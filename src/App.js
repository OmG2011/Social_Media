import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle"
import "bootstrap-icons/font/bootstrap-icons.css"
import { jwtDecode } from 'jwt-decode';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Routing from './Routers/routes.js';
import { useCookies } from 'react-cookie';
import { useNavigate } from 'react-router-dom';
import { createContext, useEffect } from 'react';
export const token = createContext();

function App() {
  // const [cookies] = useCookies(['user'])
  // const navigate = useNavigate();

  // useEffect(() => {
  //   const token  = cookies.user;
  //   const decode = jwtDecode(token);

  //   if (decode.exp < Date.now() / 1000) {
  //     navigate('/login')
  //   }
  // }, [])

  return (
    <div className="App">
      <Routing />
      <ToastContainer />
    </div>
  );
}

export default App;
