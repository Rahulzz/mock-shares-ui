import React, { Component } from "react";
import StockItem from "./StockItem";

class StockList extends Component {
  render() {
    return (
      <div className="stock-list">
        {this.props.shareList.map((item, key) => (
          <StockItem key={item.id} detail={item} />
        ))}
      </div>
    );
  }
}

export default StockList;
