
import React from 'react';
import { useState,useEffect } from 'react';
import {Routes,Route,Navigate,NavLink,useNavigate} from 'react-router-dom';
import './App.css';
import RegisterUser from './pages/registrationform/user-registr';
import Login from './pages/loginform/loginform'
import UserDetails from './pages/userdetails/userDetails';
import UsersList from './pages/userlist/userlist';
import {RouterNames} from "./router/router";

function App() {

  const [token, setToken] = useState('')

  const navigate = useNavigate()

  useEffect(() => {
    const tokenData = localStorage.getItem("token-test-lesson");
    if (tokenData) {
      setToken(tokenData)
    }
  }, [])

  const goToUsersList = () => {
    navigate(RouterNames.USERS_LIST)
  }


return (
    <div className="App">
      hhhshshhssh
      djdjjdjd
      <header>
        <button onClick={goToUsersList}>Click me</button>
        <ul>
          {token ?
            <li>
              <NavLink to={RouterNames.USER_DETAILS}>User details</NavLink>
            </li>
            :
            <>
              <li>
                <NavLink to={RouterNames.HOME}>Registration</NavLink>
              </li>
              <li>
                <NavLink to={RouterNames.USERS_LIST}>Users</NavLink>
              </li>
              <li>
                <NavLink to={RouterNames.LOGIN}>Login</NavLink>
              </li>
            </>
          }
        </ul>
      </header>

      {token ?
        <Routes>
          <Route element={<UserDetails/>} path={RouterNames.USER_DETAILS}/>
          <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
          <Route element={<Navigate to={'/'}/>} path='*'/>
        </Routes> :
        <Routes>
          <Route element={<RegisterUser/>} path={RouterNames.HOME}/>
          <Route element={<UsersList/>} path={RouterNames.USERS_LIST}/>
          <Route element={<Login/>} path={RouterNames.LOGIN}/>
          <Route element={<Navigate to={'/'}/>} path='*'/>
        </Routes>
      }




      <RegisterUser />
      <Login />


    </div>
  );
}

export default App;
