import React, {Component} from "react";

import "./App.css";
import {BrowserRouter, Switch, Route} from "react-router-dom";
import Header from "./components/Header";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Homepage from "./components/Homepage";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: "not logged"
    };
  }

  render() {
    return (
      <div className="App">
        <Header />
        <BrowserRouter>
          <Switch>
            <Route path="/" exact render={() => <LoginModal />} />
            <Route path="/home" exact render={() => <Homepage />} />
            <Route path="/signup" exact render={() => <SignupModal />} />
            <Route path="/badLogin" exact render={()=><h2> zle haslo </h2>} />
          </Switch>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
