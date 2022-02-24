import React, { useEffect, useContext } from "react";
import GithubLogo from "../../assets/githublogo.png";
import AuthContext from "../../store/context";
import "./style.css";

export default function Login(props) {
  const authContext = useContext(AuthContext);

  const { loginSuccess, loginError, isAuthenticated, showLoader, loading } = authContext;

  useEffect(() => {
    const url = window.location.href;
    const token = url.includes("?code=");

    if (token) {
      const accessCode = url.split("?code=");
      window.history.pushState({}, null, accessCode[0]);
      const requestData = {
        code: accessCode[1],
      };

      showLoader();

      const authenticateToken = async () => {
        await fetch("http://localhost:8000/authenticate", {
          method: "POST",
          body: JSON.stringify(requestData),
        })
          .then((response) => response.json())
          .then((data) => loginSuccess(data))
          .catch((error) => loginError(error));
      }

      authenticateToken()
    }
  }, []);

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  return (
    <div className="login-card-container">
      <div className="card">
        <img
          className="card-img-top"
          src={GithubLogo}
          alt="Card image cap"
          className="rounded-circle"
          width="150px"
        />
        <div className="card-body">
          <h5 className="card-title">Hello 👋🏻</h5>
         { !loading ? 
          <a
            className="btn btn-dark"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URI}`}
          >
            <span>Sign in with GitHub</span>
          </a>
             :
          <button class="btn btn-dark" type="button" disabled>
            <span
              class="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
            Loading...
          </button>}
          <p className="footer-text">in order to get started</p>
        </div>
      </div>
    </div>
  );
}
