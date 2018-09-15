import React from "react";
import axios from "axios";
import { Redirect } from "react-router";

import NavigationBar from "../NavigationBar";

import Grid from "@material-ui/core/Grid";
import "./Homepage.css";
import Cookies from "js-cookie";
import endpoint from "../../const/endpoint";

export default class HomepageView extends React.Component {
  componentDidMount() {
    if (!Cookies.get("authToken")) document.location = "/";
    axios
      .get(endpoint + "/api/teams", {
        headers: {
          Authorization: `Bearer ${Cookies.get("authToken")}`
        }
      })
      .then(reps => console.log(reps));
  }

  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
