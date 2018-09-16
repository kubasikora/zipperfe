import React from "react";
import Grid from "@material-ui/core/Grid";
import changeMsToDate from "../../functions/changeMsToDate";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";

const FixtureDetailsCard = props => {
  return (
    <Grid container>
      <Grid item xs={12}>
            <Typography style={{margin: "2%"}}> {changeMsToDate(props.date)} </Typography>
      </Grid>
      <Grid item xs={6}>
        <Card style={{margin: "1%"}}>
          <CardContent>
              {props.homeBet?
            (<span><Typography> Twój zakład </Typography>
              <Typography> {`${props.homeBet} : ${props.awayBet}`} </Typography></span>):
            (<span><Typography> Brak</Typography>
            <Typography> zakładu </Typography></span>)
              }
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={6}>
      <Card style={{margin: "1%"}}>
          <CardContent>
            <Typography> Wynik spotkania </Typography>
            <Typography> {`${props.homeResult} : ${props.awayResult}`} </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default FixtureDetailsCard;
