import React from "react";
import axios from "axios";
import {Redirect} from "react-router";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import BettingPage from "../BettingPage";

export default class NavigationBarView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 0
    };
  }

  handleChange = (event, value) => {
    this.setState({value});
  };

  render() {
    const {classes} = this.props;
    const {value} = this.state;

    return (
      <div>
        <AppBar position="sticky" style={{backgroundColor: "rgb(6,17,58)"}}>
          <Tabs value={value} onChange={this.handleChange} fullWidth>
            <Tab label="Zakłady" />
            <Tab label="Tabela" />
            <Tab label="Historia" />
          </Tabs>
        </AppBar>
        {value === 0 && <TabContainer><BettingPage /></TabContainer>}
        {value === 1 && <TabContainer>Tabela</TabContainer>}
        {value === 2 && <TabContainer>Historia</TabContainer>}
      </div>
    );
  }
}
