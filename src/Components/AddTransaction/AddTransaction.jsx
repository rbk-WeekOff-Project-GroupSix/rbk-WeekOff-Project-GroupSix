import React from "react";
import axios from "axios";

class addTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      text: "",
      amount: "",
      createdAt: "",
    };
 }
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  handlerSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4040/expenses", {
        text : this.state.text,
        amount  : this.state.amount ,
        createdAt : this.state.createdAt,
      })
      .then((res) => {
        console.log(res.data );
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div>
        <label> Expenses :  </label><br/>
          <input
            type="text"
            name="text"
            value={this.state.text}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter text..."
          ></input>{" "}
          <br /> <br />
          <label> Date :  </label><br/>
          <input
            type="date"
            name="createdAt"
            value={this.state.createdAt}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter date..."
          ></input>
          <br /> <br />
          <label> amount :  </label><br/>
          <input
            type="text"
            name="amount"
            value={this.state.amount}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter amount..."
          ></input>
          <br /> <br />
          <button> Add transaction</button>
          
        </div>
      </form>
    );
  }
}
export default addTransaction;
