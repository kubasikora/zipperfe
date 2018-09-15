import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Cookies from "js-cookie";
import axios from "axios";
import endpoint from "../../const/endpoint";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import BetForm from "./BetForm";
import { withStyles } from '@material-ui/core/styles';
import Loading from "../Loading";

import "./BettingPage.css"

class BettingPageView extends React.Component {
  constructor(props) {
    super(props);
    this.changeMsToDate = this.changeMsToDate.bind(this);
  }

  componentDidMount() {
     this.props.fetchAvailableFixtures();
     this.props.fetchBets(Cookies.get("userID"))
  }

  changeMsToDate(ms) {
    let date = new Date(ms);  
    return `${date.getDate()}.${date.getMonth()}.${date.getFullYear()}  ${date.getHours()}:${date.getMinutes()}`;
  }

  render() {
    return (
      <Card className="betting-card gradient-background-bets">
        <CardContent>
          <p className="card-title">Dostępne mecze</p>
          {this.props.loading ? <Loading /> :
          this.props.fixtures.map(el => {
            let bet = this.props.bets.find(bet => bet.fixture === el.fixtureID);
            let home, away;
            if (bet) {
              home = bet.bet.split(":")[0];
              away = bet.bet.split(":")[1];
            }
            return (
              <ExpansionPanel key={el.fixtureID}>
                <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                  <Typography>{`${el.home} - ${el.away}`}</Typography>
                </ExpansionPanelSummary>
                <ExpansionPanelDetails style={{backgroundColor: "rgb(250,250,250)"}}>
                  <BetForm
                    date={this.changeMsToDate(el.date)}
                    fixture={el.fixtureID}
                    home={home}
                    away={away}
                  />
                </ExpansionPanelDetails>
              </ExpansionPanel>
            );
          })}
        </CardContent>
      </Card>
    );
  }
}

export default BettingPageView;
