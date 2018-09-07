import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Provider } from "./context";
import Header from "./components/layouts/Header";
import Originals from "./components/Originals";
import Home from "./components/Home";
import MyList from "./components/MyList";
import Movies from "./components/Movies";
import RecentlyAdded from "./components/RecentlyAdded";

import "./css/main.css";

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <React.Fragment>
            <Header />
            <div className="index">
              <Switch>
                <Route exact path="/" component={Home} />
                <Route exact path="/tvshows" component={Originals} />
                <Route exact path="/mylist" component={MyList} />
                <Route exact path="/movies" component={Movies} />
                <Route exact path="/recentlyadded" component={RecentlyAdded} />
              </Switch>
            </div>
          </React.Fragment>
        </Router>
      </Provider>
    );
  }
}

export default App;
