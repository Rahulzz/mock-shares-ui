import React, { Component } from "react";
import { connect } from "react-redux";
import StockList from "./StockList";
import StockShareGraph from "./StockShareGraph";

class Stocks extends Component {
  state = {
    split: [{ name: "Mutual Funds", value: 0 }, { name: "ETFs", value: 0 }]
  };

  componentWillReceiveProps(newProps) {
    if (newProps.shareList !== this.props.shareList) {
      var mutualCounter = 0;
      var etfCounter = 0;

      for (var key in newProps.shareList) {
        var obj = newProps.shareList[key];
        if (obj.type === "MF") {
          mutualCounter++;
        } else if (obj.type === "ETF") {
          etfCounter++;
        }
      }

      this.setState({
        split: [
          { name: "Mutual Funds", value: mutualCounter },
          { name: "ETFs", value: etfCounter }
        ]
      });
    }
  }

  render() {
    return (
      <div className="stock-container">
        <StockList shareList={this.props.shareList} />
        <StockShareGraph split={this.state.split} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  shareList: state.shares.items
});

export default connect(mapStateToProps)(Stocks);
