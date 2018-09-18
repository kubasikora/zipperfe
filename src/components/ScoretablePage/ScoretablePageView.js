import React from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import ResultsTable from "./ResultsTable";
import Loading from "../Loading";

import "./ScoretablePage.css";

class ScoretablePageView extends React.Component {
  componentDidMount() {
    this.props.fetchScoretable();
  }

  render() {
    return (
      <Card className="betting-card gradient-background-scoretable">
        <CardContent>
        <p className="card-title">Tabela wyników</p>
            {this.props.loading ? (
              <Loading />
            ) : (
              <ResultsTable scoretable={this.props.scoretable.sort((el1, el2) => {return el2.pts - el1.pts})} />
            )}
        </CardContent>
      </Card>
    );
  }
}

export default ScoretablePageView;
