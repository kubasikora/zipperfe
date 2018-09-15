import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Cookies from "js-cookie";
import axios from "axios";
import endpoint from "../../const/endpoint";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CircularProgress from "@material-ui/core/CircularProgress";
import ResultsTable from "./ResultsTable";
import Loading from "../Loading";

import "./ScoretablePage.css";

class ScoretablePageView extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchScoretable();
  }

  render() {
    return (
      <Card className="betting-card gradient-background-scoretable">
        <CardContent>
            {this.props.loading ? (
              <Loading />
            ) : (
              <ResultsTable scoretable={this.props.scoretable} />
            )}
        </CardContent>
      </Card>
    );
  }
}

export default ScoretablePageView;
