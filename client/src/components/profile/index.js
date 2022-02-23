import React,{useContext,useState,useEffect} from "react";
import { isEmpty } from 'lodash';
import AuthContext from '../../store/context';
import './style.css';

export default function Profile() {

  const authContext = useContext(AuthContext);

  const [userData,setUserData] = useState({})

  const { user } = authContext;

  useEffect(() => {
    if(!isEmpty(user)){
      setUserData(user)
      console.log("user",user)
    }
  },[user])

  return (
    <div className="profile-card">
      <div className="card">
        <div className="card-body">
          <div className="d-flex flex-column align-items-center text-center">
            <img
              src={userData.avatar_url}
              alt="Admin"
              className="rounded-circle"
              width="150"
            />
            <div className="mt-3">
              <h4>{userData.name}</h4>
              <p className="text-secondary mb-1">{user.bio}</p>
              <p className="text-muted font-size-sm">{userData.location}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
