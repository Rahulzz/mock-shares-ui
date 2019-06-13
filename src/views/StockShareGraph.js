import React, { Component } from "react";
import { PieChart, Pie, Legend, Cell } from "recharts";

const data = [{ name: "Mutual Funds", value: 3 }, { name: "ETFs", value: 3 }];

const COLORS = ["#5DBDE3", "#AF9843"];

class StockShareGraph extends Component {
  render() {
    return (
      <div className="stock-graph">
        <div className="title">Portfolio</div>
        <div className="graph">
          <PieChart width={330} height={200}>
            <Pie
              dataKey="value"
              isAnimationActive={false}
              data={this.props.split}
              outerRadius={80}
              innerRadius={50}
              cx={85}
              cy={100}
              labelLine={false}
              fill="#8884d8"
            >
              {data.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="middle" align="right" />
          </PieChart>
        </div>
      </div>
    );
  }
}

export default StockShareGraph;
