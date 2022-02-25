import React, { useContext } from "react";
import Profile from "../profile";
import Repositories from "../repositories";
import Activities from "../activities";
import AuthContext from "../../store/context";

import './style.css';

export default function Home(props) {

  const authContext = useContext(AuthContext);

  const { logout } = authContext;

  const handleLogout = () => {
    props.history.push('/login')
    logout()
  }

  return (
    <div>
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <span className="navbar-brand mb-0 h1" style={{marginLeft:'auto',cursor:'pointer'}} onClick={() => handleLogout() }>Log Out</span>
        </div>
      </nav>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 add-padding">
              <Profile/>
          </div>
          <div className="col-sm-6 add-padding">
              <Repositories/>
          </div>
          <div className="col-sm-6 add-padding">
              <Activities/>
          </div>
        </div>
      </div>
    </div>
  );
}