import React, { Component } from "react";
import "./App.css";
import { connect } from "react-redux";
import { fetchShares } from "./redux/sharesAction";
import Stocks from "./views/Stocks";

class App extends Component {

  componentWillMount() {
    this.props.dispatch(fetchShares());
  }

  render() {
    return (
      <div className="base-container">
        <Stocks />
      </div>
    );
  }
}

export default connect()(App);
