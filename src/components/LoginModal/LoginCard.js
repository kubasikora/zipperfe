import React from "react";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

import "./LoginModal.css";

const LoginCard = ({loading, loginHandler, signupHandler}) => {

  document.addEventListener("keydown", e => {
    if(e.key === "Enter") {
      loginHandler();
    }
  })

  return (
    <Card raised style={{marginTop: "8%"}} className="gradient-background-login">
      <Card className="login-inner-card">
        <h2 style={{marginTop: "8%"}}> Zaloguj się </h2>
      <div>
        <TextField
          id="username"
          label="Login"
          type="text"
          autoComplete="off"
          style={{width: "50%"}}
        />
      </div>
      <div style={{marginTop: "2%", marginBottom: "8%"}}>
        <TextField
          id="password"
          label="Hasło"
          type="password"
          autoComplete="off"
          style={{width: "50%"}}
        />
      </div>
      <Grid item xs={12}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginHandler()}
            style={{width: "50%"}}
          >
            Zaloguj
          </Button>
        </Grid>
        <Grid item xs={12}>
          <Button
            variant="contained"
            color="default"
            onClick={() => signupHandler()}
            style={{marginTop: "2%", width: "50%"}}
          >
            Zarejestruj
          </Button>
        </Grid>
      </Card>
    </Card>
  );
};

export default LoginCard;
