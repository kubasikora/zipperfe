import React from "react";
import SignupCard from "./SignupCard";
import Grid from "@material-ui/core/Grid";

export default class SignupModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };

    this.signupHandler = this.signupHandler.bind(this);
  }

  signupHandler() {}

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1} sm={3} />
          <Grid item xs={10} sm={6}>
            <SignupCard
              loading={this.state.loading}
              signupHandler={() => {
                this.signupHandler();
              }}
              handleChange={event => {
                console.log(event.target);
              }}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
