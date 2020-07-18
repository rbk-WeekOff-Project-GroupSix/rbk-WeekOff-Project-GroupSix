import React, { Component } from "react";
import axios from "axios";
import Trans from "../Trans/Trans";

class Total extends Component {
  constructor(props) {
    super(props);

    this.state = {
      amount: 0,
    };
  }

  click = () => {
    var x = this.props.state.Trans.map((ele) => {
      return ele.amount;
    });
    console.log(x);
    var y = x.reduce((acc, e) => {
      return acc + e;
    }, 0);
    this.setState({
      amount: y,
    });
  };

  render() {
    return (
      <div>
        <button variant="btn btn-success" onClick={this.click}>
          {" "}
          Total OF Transication
        </button>
        <p> total Of Transication : {this.state.amount}</p>
      </div>
    );
  }
}
export default Total;
