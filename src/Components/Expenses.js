import React from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";

class addTransaction extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensesTypes: "",
      amount: 1,
      createdAt: "",
      description: "",
    };
  }
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  }
  handlerSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4040/expenses", {
        expensesTypes: this.state.expensesTypes,
        amount: this.state.amount,
        createdAt: this.state.createdAt,
        description: this.state.description,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  getAmountOfMoney = (event) => {
    this.setState({
      amout: event.target.value,
    });
  };
  render() {
    return (
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className="myDiv">
          <label> Types of Expenses: </label>
          <br />
          <select
            type="text"
            name="expensesTypes"
            value={this.state.expensesTypes}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter text..."
          >
            <option value="Operating Expenses ">Operating Expenses </option>
            <option value="Financial Expenses">Financial Expenses</option>
            <option value="Extraordinary Expenses">
              Extraordinary Expenses
            </option>
            <option value="Non-Operating Expenses">
              Non-Operating Expenses
            </option>
            <option value="Other">Other</option>
          </select>
          <br /> <br />
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter description ..."
          ></input>
          <label> Date : </label>
          <br />
          <input
            type="date"
            name="createdAt"
            value={this.state.createdAt}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter date..."
          ></input>
          <br /> <br />
          <label> amount : </label>
          <br />
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter amount..."
          ></input>
          <br /> <br />
          <button variant="btn btn-success"> Add transaction</button>
        </div>
      </form>
    );
  }
}
export default addTransaction;
