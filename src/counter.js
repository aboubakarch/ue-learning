import React, { Component } from "react";

class Counter extends Component {
  state = { count: 0 };
  handleIncrement = () => {
    let { count } = this.state;
    this.setState({ count: ++count });
  };

  handleDecrement = () => {
    let { count } = this.state;
    if (count > 0) {
      this.setState({ count: --count });
    }
  };
  render() {
    const { counterNo, onDelete } = this.props;
    return (
      <div className="row m-5">
        <div className="col-1">{counterNo}</div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={this.handleIncrement}>
            +
          </button>
        </div>
        <div className="col-1">
          <p>{this.state.count}</p>
        </div>
        <div className="col-1">
          <button className="btn btn-info" onClick={this.handleDecrement}>
            -
          </button>
        </div>

        <div className="col-1">
          <button
            className="btn btn-danger"
            onClick={() => onDelete(counterNo)}
          >
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
