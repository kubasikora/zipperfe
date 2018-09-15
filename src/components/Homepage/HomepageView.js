import React from "react";
import NavigationBar from "../NavigationBar";
import Cookies from "js-cookie";

export default class HomepageView extends React.Component {
  componentDidMount() {
    if (!Cookies.get("authToken")) document.location = "/";
  }
  
  render() {
    return (
      <div>
        <NavigationBar />
      </div>
    );
  }
}
