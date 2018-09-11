import React from "react";
import axios from "axios";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import {Redirect} from "react-router";

export default class SignupCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isRegistered: false,
      teams: [],
      ucl: ""
    }
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };  


  componentDidMount(){
    axios.get("/teams").then(resp => {
      this.setState({teams: [...resp.data]});
    })
  }

  register() {
    let password = document.getElementById("password").value;
    let repeatPassword = document.getElementById("password-repeat").value;
    if(password !== repeatPassword) return alert("Hasła nie zgadzają się");
    let UCLwinner = this.state.teams.find(el => el.name === this.state.ucl).teamID;
    let body = {
      name: document.getElementById("name").value,
      login: document.getElementById("username").value,
      password,
      UCLwinner
    }
    axios.post("/register", body).then(el => this.setState({isRegistered: true}));
  }

  render() {
    if(this.state.isRegistered) return <Redirect to="/" />
    return (
      <Card raised style={{marginTop: "8%", marginBottom: "8%"}}>
        <Grid container spacing={8}>
          <Grid item xs={12}>
            <h2 style={{marginTop: "8%"}}> Zarejestruj się </h2>
          </Grid>
          <Grid item xs={12}>
            <div>
              <TextField
                id="name"
                label="Imię i Nazwisko"
                type="text"
                autoComplete="off"
                style={{width: "60%"}}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{marginTop: "2%"}}>
              <TextField
                id="username"
                label="Login"
                type="text"
                autoComplete="off"
                style={{width: "60%"}}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{marginTop: "2%"}}>
              <TextField
                id="password"
                label="Hasło"
                type="password"
                autoComplete="off"
                style={{width: "60%"}}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
            <div style={{marginTop: "2%"}}>
              <TextField
                id="password-repeat"
                label="Powtórz hasło"
                type="password"
                autoComplete="off"
                style={{width: "60%"}}
              />
            </div>
          </Grid>
          <Grid item xs={12}>
          <FormControl style={{marginTop: "2%", width: "60%", marginBottom: "5%"}} >
          <InputLabel htmlFor="ucl">Zwycięzca LM</InputLabel>
          <Select
            value={this.state.ucl}
            onChange={this.handleChange}
            inputProps={{
              name: "ucl",
              id: "ucl"
            }}
          >
            <MenuItem value="">
              <em>None</em>
            </MenuItem>
            {this.state.teams.map(el => {
              return <MenuItem key={el.teamID} value={el.name}>{el.name}</MenuItem>
            })}
          </Select>
        </FormControl>
          </Grid>
          <Grid item xs={12} md={4}>
          <Button
              variant="contained"
              color="default"
              onClick={() => this.setState({isRegistered: true})}
              style={{marginTop: "10%", marginLeft: "55%", marginBottom: "10%"}}
            >
              Cofnij
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Button
              variant="contained"
              color="primary"
              onClick={() => this.register()}
              style={{marginTop: "7%", marginLeft: "55%", marginBottom: "10%"}}
            >
              Zarejestruj
            </Button>
          </Grid>
        </Grid>
      </Card>
    );
  }
}
