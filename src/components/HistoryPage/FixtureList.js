import React from "react";
import Paper from "@material-ui/core/Paper";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import CircularProgress from "@material-ui/core/CircularProgress";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Typography from "@material-ui/core/Typography";
import FixtureDetailsCard from "./FixtureDetailsCard";

const FixtureList = ({ fixtures, bets }) => {
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
        let resultColour = calculateColourFromBet(homeBet, awayBet, homeResult, awayResult); 
        return (
          <ExpansionPanel style={{
              backgroundColor: resultColour,
              backgroundImage: `linear-gradient(to bottom right, rgb(13,52,255), ${resultColour})`
            }} 
            key={fixture.fixtureID}>
            <ExpansionPanelSummary expandIcon={<ExpandMoreIcon />}>
              <Typography style={{color: "white"}}>{`${fixture.home} - ${fixture.away}`}</Typography>
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
};

export default FixtureList;

const calculateColourFromBet = (betHome, betAway, resultHome, resultAway) => {
    if(!betHome) return "red";
    var betResult = setResult(betHome, betAway);
    var fixtureResult = setResult(resultHome, resultAway);
    if (betResult.result !== fixtureResult.result) return "red"; 
    if (betHome === resultHome && betAway === resultAway) return "green";
    else return "yellow";
  };
  
  const setResult = (home, away) => {
    if (home == away)
      return {
        result: "draw"
      };
    if (home > away)
      return {
        result: "home"
      };
    if (home < away)
      return {
        result: "away"
      };
  };