import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter";

class App extends Component {
  state = { counter: [{ id: 1, count: 0 }], numberOfCounter: 0 };

  handleAddMore = () => {
    const { counter } = this.state;
    let newCounter = { id: counter.length + 1, count: 0 };
    counter.push(newCounter);
    this.setState({ counter });
  };

  handleDelete = (item) => {
    let { counter, numberOfCounter } = this.state;
    const index = counter.indexOf(item);
    counter.splice(index, 1);
    if (item.count > 0) {
      --numberOfCounter;
    }
    this.setState({ counter, numberOfCounter });
  };

  handleIncrement = (item) => {
    //IndexOf
    //Array.indexOf(element) it returns the index of a specific element of array;

    let { counter, numberOfCounter } = this.state;
    const index = counter.indexOf(item);
    counter[index] = { ...item, count: item.count + 1 };
    if (item.count === 0) {
      numberOfCounter++;
    }
    this.setState({ counter, numberOfCounter });
  };

  handleDecrement = (item) => {
    //IndexOf
    //Array.indexOf(element) it returns the index of a specific element of array;
    if (item.count === 0) return;
    let { counter, numberOfCounter } = this.state;
    const index = counter.indexOf(item);
    counter[index] = { ...item, count: item.count - 1 };
    if (item.count === 1) {
      numberOfCounter--;
    }
    this.setState({ counter, numberOfCounter });
  };

  render() {
    const { counter, numberOfCounter } = this.state;
    return (
      <>
        <div className="row">
          <div className="col-6">
            <h3>This is a demo app</h3>
          </div>
          <div className="col-6">
            <span>{numberOfCounter}</span>
          </div>
        </div>
        {counter.map((item) => (
          <Counter
            key={item.id}
            data={item}
            onDelete={this.handleDelete}
            onIncrement={this.handleIncrement}
            onDecrement={this.handleDecrement}
          />
        ))}
        <button className="btn btn-success m-5" onClick={this.handleAddMore}>
          Add More +
        </button>
      </>
    );
  }
}

export default App;
