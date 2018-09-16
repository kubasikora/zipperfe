import React from "react";
import SignupCard from "./SignupCard";
import Grid from "@material-ui/core/Grid";

export default class SignupModalView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false
    };
  }

  render() {
    return (
      <div>
        <Grid container spacing={0}>
          <Grid item xs={1} sm={3} />
          <Grid item xs={10} sm={6}>
            <SignupCard
              loading={this.props.loading}
              postSignup={(body) => this.props.postSignup(body)}
              raiseSignupError={() => this.props.raiseSignupError()}
              closeErrorInfo={()=>this.props.closeErrorInfo()}
              error={this.props.error}
            />
          </Grid>
        </Grid>
      </div>
    );
  }
}
