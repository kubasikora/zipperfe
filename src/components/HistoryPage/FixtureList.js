import React from "react";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import FixtureDetailsCard from "./FixtureDetailsCard";
import calculateColourFromBet from "../../functions/calculateColourFromBet";

class FixtureList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expanded: null
    };
  }

  handleChange = panel => (event, expanded) => {
    this.setState({
      expanded: expanded ? panel : false
    });
  };

  render() {
    let { fixtures, bets } = this.props;
    return (
      <div>
        {fixtures.map(fixture => {
          let bet = bets.find(bet => bet.fixture === fixture.fixtureID);
          let homeBet, awayBet, homeResult, awayResult;
          homeResult = fixture.final_score.split(":")[0];
          awayResult = fixture.final_score.split(":")[1];
          if (bet) {
            homeBet = bet.bet.split(":")[0];
            awayBet = bet.bet.split(":")[1];
          }
          let resultColour = calculateColourFromBet(
            homeBet,
            awayBet,
            homeResult,
            awayResult
          );
          return (
            <ExpansionPanel
              expanded={this.state.expanded === fixture.fixtureID}
              onChange={this.handleChange(fixture.fixtureID)}
              key={fixture.fixtureID}
              style={{
                backgroundColor: resultColour,
                backgroundImage: `linear-gradient(to bottom right, rgb(13,52,255), ${resultColour})`
              }}
            >
              <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
                <Typography style={{ color: "white" }}>{`${fixture.home} - ${
                  fixture.away
                }`}</Typography>
              </ExpansionPanelSummary>
              <ExpansionPanelDetails
                style={{ backgroundColor: "rgb(250,250,250)" }}
              >
                <FixtureDetailsCard
                  date={fixture.date}
                  homeBet={homeBet}
                  awayBet={awayBet}
                  homeResult={homeResult}
                  awayResult={awayResult}
                />
              </ExpansionPanelDetails>
            </ExpansionPanel>
          );
        })}
      </div>
    );
  }
}

export default FixtureList;
