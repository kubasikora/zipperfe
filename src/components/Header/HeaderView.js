import React from "react";
import "./Header.css";
import Grid from "@material-ui/core/Grid";
import Tooltip from "@material-ui/core/Tooltip";
import Cookie from "js-cookie";

class HeaderView extends React.Component {
  render() {
    return (
      <header>
        <Grid container spacing={0} className="header">
          <Grid item sm={10} />
          <Grid item xs={2}>
            <Tooltip title="Wyloguj" enterDelay={500} leaveDelay={200}>
              <h4 className="login-info logout-cursor" onClick={() => this.props.logout()}>
                {Cookie.get("authToken") ? `Wyloguj` : ""}
              </h4>
            </Tooltip>
          </Grid>
          <Grid item xs={12}>
            <img src="../logo.png" className="header-logo" alt="logo" />
          </Grid>
        </Grid>
      </header>
    );
  }
}

export default HeaderView;
