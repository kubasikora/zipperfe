import React from "react";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import axios from "axios";
import endpoint from "../../const/endpoint";
import Cookies from "js-cookie";
import {connect } from "react-redux";
import postBet from "../../actions/bets/postBet";

class BetForm extends React.Component {
constructor(props){
    super(props);
    this.state ={
        fixture: props.fixture,
        homeGoals: !!props.home? props.home : 0,
        awayGoals: !!props.away? props.away : 0
    }
}

handleChange = name => event => {
    if(event.target.value < 0) return;
    this.setState({
      [name]: event.target.value,
    });
  };

  render() {
    return (
      <Grid container>
        <Grid item xs={12} style={{marginBottom: "2%", marginTop: "1%"}}>
          {this.props.date}
        </Grid>
        <Grid item xs={5}>
        <TextField
          id="number"
          label="Gospodarze"
          value={this.state.homeGoals}
          onChange={this.handleChange('homeGoals')}
          type="number"
          InputLabelProps={{
            shrink: true
          }}
          style={{marginTop: "5px",width: "15%", marginRight: "20%"}}
        />
        </Grid>
        <Grid item xs={2} />
        <Grid item xs={5}>
        <TextField
          id="number"
          label="Goście"
          value={this.state.awayGoals}
          type="number"
          onChange={this.handleChange('awayGoals')}
          InputLabelProps={{
            shrink: true
          }}
          style={{marginTop: "5px", width: "15%", marginLeft: "8%"}}
        />
        </Grid>
        <Grid item xs={12} md={10}/>
        <Grid item xs={12} md={2} >
        <Button variant="contained" color="primary" style={{marginTop: "10%"}}onClick={() => {
            this.props.postBet(this.state.fixture, this.state.homeGoals, this.state.awayGoals);
        }}>
            Obstaw
        </Button> 
        </Grid>
      </Grid>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  return {}
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    postBet: (fixture, home, away) => {dispatch(postBet(fixture, home, away))}
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(BetForm);
