import React, { useEffect, useContext } from "react";
import GithubLogo from "../../assets/githublogo.png";
import AuthContext from "../../store/context";
import "./style.css";

export default function Login(props) {
  const authContext = useContext(AuthContext);

  const { loginSuccess, loginError, isAuthenticated } = authContext;

  useEffect(() => {
    if (isAuthenticated) {
      props.history.push("/");
    }
    // eslint-disable-next-line
  }, [isAuthenticated, props.history]);

  useEffect(() => {
    // After requesting Github access, Github redirects back to your app with a code parameter
    const url = window.location.href;
    const hasCode = url.includes("?code=");

    // If Github API returns the code parameter
    if (hasCode) {
      const newUrl = url.split("?code=");
      window.history.pushState({}, null, newUrl[0]);
      // setData({ ...data, isLoading: true });

      const requestData = {
        code: newUrl[1],
      };

      // Use code parameter and other parameters to make POST request to proxy_server
      fetch("http://localhost:8000/authenticate", {
        method: "POST",
        body: JSON.stringify(requestData),
      })
        .then((response) => response.json())
        .then((data) => loginSuccess(data))
        .catch((error) => loginError(error));
    }
  }, []);
  return (
    <div className="login-card-container">
      <div className="card" style={{ width: "20rem", borderRadius: "20px" }}>
        <img
          className="card-img-top"
          src={GithubLogo}
          alt="Card image cap"
          className="rounded-circle"
          width="150px"
        />
        <div className="card-body">
          <h5 className="card-title">Hello 👋🏻</h5>
          <a
            className="btn btn-dark"
            href={`https://github.com/login/oauth/authorize?scope=user&client_id=a1b53f517373a647beab&redirect_uri=http://localhost:3000/login`}
            onClick={() => {
              // setData({ ...data, errorMessage: "" });
            }}
          >
            <span>Login with GitHub</span>
          </a>
          <p className="footer-text">in order to get started</p>
        </div>
      </div>
    </div>
  );
}
