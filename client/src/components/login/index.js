import React from "react";
import GithubLogo from '../../assets/githublogo.png'
import "./style.css";

export default function Login() {
  return (
    <div className="login-card-container">
      <div className="card" style={{ width: "20rem",borderRadius:'20px' }}>
        <img className="card-img-top" src={GithubLogo} alt="Card image cap" className="rounded-circle"
              width="150px" />
        <div className="card-body">
          <h5 className="card-title">Hello 👋🏻</h5>
          <button type="button" className="btn btn-dark">
            SIGN IN WITH GITHUB
          </button>
          <p className="footer-text">in order to get started</p>
        </div>
      </div>
    </div>
  );
}