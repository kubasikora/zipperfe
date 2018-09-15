import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabContainer from "./TabContainer";
import BettingPage from "../BettingPage";
import ScoretablePage from "../ScoretablePage";
import HistoryPage from "../HistoryPage";

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
        {value === 1 && <TabContainer><ScoretablePage /></TabContainer>}
        {value === 2 && <TabContainer><HistoryPage /></TabContainer>}
      </div>
    );
  }
}
