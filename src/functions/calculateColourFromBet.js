const calculateColourFromBet = (betHome, betAway, resultHome, resultAway) => {
  if (!betHome) return "red";
  var betResult = setResult(betHome, betAway);
  var fixtureResult = setResult(resultHome, resultAway);
  if (betResult.result !== fixtureResult.result) return "red";
  if (betHome === resultHome && betAway === resultAway) return "green";
  else return "yellow";
};

const setResult = (home, away) => {
  if (home === away)
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

export default calculateColourFromBet;