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
    <Card raised style={{marginTop: "8%"}}>
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
      <div style={{marginTop: "2%", marginBottom: "5%"}}>
        <TextField
          id="password"
          label="Hasło"
          type="password"
          autoComplete="off"
          style={{width: "50%"}}
        />
      </div>
      <Grid container spacing={0}>
        <Hidden smDown>
          <Grid item sm={2} />
        </Hidden>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="default"
            onClick={() => signupHandler()}
            style={{marginLeft: "0%", marginBottom: "5%"}}
          >
            Zarejestruj
          </Button>
        </Grid>
        <Grid item xs={12} md={4}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => loginHandler()}
            style={{marginLeft: "12%", marginBottom: "30%"}}
          >
            Zaloguj
          </Button>
        </Grid>
      </Grid>
    </Card>
  );
};

export default LoginCard;
