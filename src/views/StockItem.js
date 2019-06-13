import React, { Component } from "react";

class StockItem extends Component {
  render() {
    return (
      <div className="stock-item">
        <div className="section highlight">
          <div className="icon icon-menu" />
          <div className="cost-title">
            <div className="top">
              <div className="cost">
                <div className="wrapper">
                  <div className="cost-title">{this.props.detail.scrip}</div>
                  <div className="cost-value">
                    <span>$</span>
                    <span>{this.props.detail.shareValue}</span>
                  </div>
                </div>
              </div>
              <div className="title">
                <div className="name">iShares</div>
                <div className="product">{this.props.detail.name}</div>
              </div>
            </div>
            <div className="bottom">
              <div className="category">{this.props.detail.category}</div>
            </div>
          </div>
        </div>
        <div className="section cost">
          <div className="cost-item">
            <div className="icon icon-quantity" />
            <div className="name">Quantity</div>
            <div className="value">{this.props.detail.quantity}</div>
          </div>
          <div className="cost-item">
            <div className="icon icon-average" />
            <div className="name">Avg. Cost</div>
            <div className="value">${this.props.detail.averageCost}</div>
          </div>
          <div className="cost-item">
            <div className="icon icon-amount" />
            <div className="name">Invested Amount</div>
            <div className="value">${this.props.detail.investedAmount}</div>
          </div>
        </div>
        <div className="section percent-detail">
          <div className="detail">
            <div className="bold">Market Value</div>
            <div className="bold">${parseInt(this.props.detail.investedAmount) + parseInt(this.props.detail.unrealizedPl)}</div>
          </div>
          <div className="percent">
            <div>% of portfolio value</div>
            <div className="bold">{this.props.detail.portfolioValue}%</div>
          </div>
          <div className="graph">
            <div
              className="line"
              style={{ width: this.props.detail.portfolioValue + "%" }}
            />
          </div>
        </div>
        <div className="section percent-detail">
          <div className="detail">
            <div className="bold">Unrealized P/L</div>
            <div className="bold">${this.props.detail.unrealizedPl}</div>
          </div>
          <div className="percent">
            <div>% Return</div>
            <div className="bold">{this.props.detail.return}%</div>
          </div>
          <div className="graph">
            <div
              className="line"
              style={{ width: this.props.detail.return + "%" }}
            />
          </div>
        </div>
        <div className="section actions">
          <button>BUY</button>
          <button>SELL</button>
        </div>
      </div>
    );
  }
}

export default StockItem;
