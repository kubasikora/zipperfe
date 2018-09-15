import React from "react";
import Cookies from "js-cookie";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import FixtureList from "./FixtureList";
import Loading from "../Loading";

import "./HistoryPage.css";

export default class HistoryPageView extends React.Component {
  componentDidMount() {
    this.props.fetchAllFixtures();
    this.props.fetchBets(Cookies.get("userID"));
  }

  render() {
    return (
      <Card className="history-card gradient-background-history">
        <CardContent>
          <p className="card-title">Historia spotkań</p>
          {this.props.loading ? (
            <Loading />
          ) : (
            <FixtureList
              fixtures={this.props.fixtures}
              bets={this.props.bets}
            />
          )}
        </CardContent>
      </Card>
    );
  }
}
