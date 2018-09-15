import React from "react";
import axios from "axios";
import { Redirect } from "react-router";
import Grid from "@material-ui/core/Grid";

import LoginCard from "./LoginCard";
import "./LoginModal.css";
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";

export default class LoginModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      loggedIn: false,
      error: false,
      signUp: false
    };

    this.loginHandler = this.loginHandler.bind(this);
    this.signupHandler = this.signupHandler.bind(this);
  }

  loginHandler() {
    axios
      .post(endpoint + "/login", {
        credentials: "include",
        username: document.getElementById("username").value,
        password: document.getElementById("password").value
      })
      .then(resp => {
        console.log(resp);
        if (!!resp && !!resp.data && !!resp.data.token) {
          this.setState({
            loading: false,
            loggedIn: true
          });
          Cookies.set("authToken", resp.data.token);
          Cookies.set("username", resp.data.user.name);
          Cookies.set("userID", resp.data.user.userID);
          this.props.loginSuccess(resp.data.user.name);
          document.location = "/home";
        } else
          this.setState({
            loading: false,
            error: true
          });
      })
      .catch(err => {
        this.setState({
          loading: false,
          error: true
        });
      });
  }

  signupHandler() {
    this.setState({ signUp: true });
  }

  componentDidMount() {
    if (Cookies.get("authToken")) document.location = "/home";
  }

  render() {
    if (this.state.signUp) return <Redirect to="/signup" />;
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1} sm={3} />
          <Grid item xs={10} sm={6}>
            <LoginCard
              loading={this.state.loading}
              loginHandler={() => this.loginHandler()}
              signupHandler={() => {
                this.signupHandler();
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
