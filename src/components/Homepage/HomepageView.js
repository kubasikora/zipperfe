import React from "react";
import axios from "axios";
import {Redirect} from "react-router";

import NavigationBar from "../NavigationBar";

import Grid from "@material-ui/core/Grid";
import "./Homepage.css";
import Cookie from "js-cookie";

export default class HomepageView extends React.Component {
  componentDidMount() {
    //if(!Cookie.get("authToken")) document.location = "/";
  }

  render() {
    if(!this.props.loggedIn) return <Redirect to="/" />
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
