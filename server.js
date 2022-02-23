const express = require('express');
const cors = require('cors')
const app = express();

app.use(cors("*")) 

app.post("/authenticate", (req, res) => {
    const { code } = req.body;
  
    const data = new FormData();
    data.append("client_id", "a1b53f517373a647beab");
    data.append("client_secret", "f38178b0f6e7b53e6c41c727da81a95a945c7ac1");
    data.append("code", code);
    data.append("redirect_uri", "redirect_uri");
  
    // Request to exchange code for an access token
    fetch(`https://github.com/login/oauth/access_token`, {
      method: "POST",
      body: data,
    })
      .then((response) => response.text())
      .then((paramsString) => {
        let params = new URLSearchParams(paramsString);
        const access_token = params.get("access_token");
  
        // Request to return data of a user that has been authenticated
        return fetch(`https://api.github.com/user`, {
          headers: {
            Authorization: `token ${access_token}`,
          },
        });
      })
      .then((response) => response.json())
      .then((response) => {
        return res.status(200).json(response);
      })
      .catch((error) => {
        return res.status(400).json(error);
      });
  });
  
  
  const PORT = process.env.SERVER_PORT || 8000;
  app.listen(PORT, () => console.log(`Listening on ${PORT}`));