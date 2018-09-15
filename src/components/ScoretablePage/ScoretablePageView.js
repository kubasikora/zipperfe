import React from "react";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import Tooltip from "@material-ui/core/Tooltip";
import Cookies from "js-cookie";
import axios from "axios";
import endpoint from "../../const/endpoint";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import "./ScoretablePage.css"

class ScoretablePageView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {

    let rows = [{
        id: 1,
        login: "Jakub Sikora",
        points: 10
    },
    {
        id: 2,
        login: "Adam Jęczmień",
        points: 5
    }];

    return (
      <Card className="betting-card gradient-background-scoretable">
        <CardContent>
        <Paper>
      <Table >
        <TableHead>
          <TableRow>
            <TableCell>Login</TableCell>
            <TableCell numeric>Punkty</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map(row => {
            return (
              <TableRow key={row.id}>
                <TableCell component="th" scope="row">
                  {row.login}
                </TableCell>
                <TableCell numeric>{row.points}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </Paper>
        </CardContent>
      </Card>
    );
  }
}

export default ScoretablePageView;