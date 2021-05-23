import React, { Component } from "react";

class Counter extends Component {
  render() {
    const { data, onDelete, onIncrement, onDecrement } = this.props;
    return (
      <div className="row m-5">
        <div className="col-1">{data.id}</div>
        <div className="col-1">
          <button className="btn btn-primary" onClick={() => onIncrement(data)}>
            +
          </button>
        </div>
        <div className="col-1">
          <p>{data.count}</p>
        </div>
        <div className="col-1">
          <button className="btn btn-info" onClick={() => onDecrement(data)}>
            -
          </button>
        </div>

        <div className="col-1">
          <button className="btn btn-danger" onClick={() => onDelete(data)}>
            Delete
          </button>
        </div>
      </div>
    );
  }
}

export default Counter;
