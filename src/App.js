import React, { Component } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./counter";

class App extends Component {
  state = { counter: [1] };

  handleAddMore = () => {
    const { counter } = this.state;
    let size = counter.length;
    counter.push(++size);
    this.setState({ counter });
  };

  handleDelete = (item) => {
    const { counter } = this.state;
    const index = counter.indexOf(item);
    counter.splice(index, 1);
    this.setState({ counter });
  };

  render() {
    const { counter } = this.state;
    return (
      <>
        <h3>This is a demo app</h3>
        {counter.map((item) => (
          <Counter key={item} counterNo={item} onDelete={this.handleDelete} />
        ))}
        <button className="btn btn-success m-5" onClick={this.handleAddMore}>
          Add More +
        </button>
      </>
    );
  }
}

export default App;
