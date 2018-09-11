import React from "react";
import axios from "axios";
import {Redirect} from "react-router";

import NavigationBar from "../NavigationBar";

import Grid from "@material-ui/core/Grid";
import "./Homepage.css";

export default class HomepageView extends React.Component {
  componentDidMount() {
    
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
