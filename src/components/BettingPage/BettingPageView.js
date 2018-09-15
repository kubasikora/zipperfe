import React from "react";
import Cookies from "js-cookie";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import BetForm from "./BetForm";
import changeMsToDate from "../../functions/changeMsToDate";
import Loading from "../Loading";

import "./BettingPage.css";

class BettingPageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
  }

  componentDidMount() {
    this.props.fetchAvailableFixtures();
    this.props.fetchBets(Cookies.get("userID"));
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    return (
      <Card className="betting-card gradient-background-bets">
        <CardContent>
          <p className="card-title">Dostępne mecze</p>
          {this.props.loading ? (
            <Loading />
          ) : (
            this.props.fixtures.map(el => {
              let bet = this.props.bets.find(
                bet => bet.fixture === el.fixtureID
              );
              let home, away;
              if (bet) {
                home = bet.bet.split(":")[0];
                away = bet.bet.split(":")[1];
              }
              return (
                <ExpansionPanel
                  expanded={this.state.expanded === el.fixtureID}
                  onChange={this.handleChange(el.fixtureID)}
                  key={el.fixtureID}
                >
                  <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                    <Typography>{`${el.home} - ${el.away}`}</Typography>
                  </ExpansionPanelSummary>
                  <ExpansionPanelDetails
                    style={{ backgroundColor: "rgb(250,250,250)" }}
                  >
                    <BetForm
                      date={changeMsToDate(el.date)}
                      fixture={el.fixtureID}
                      home={home}
                      away={away}
                    />
                  </ExpansionPanelDetails>
                </ExpansionPanel>
              );
            })
          )}
        </CardContent>
      </Card>
    );
  }
}

export default BettingPageView;
