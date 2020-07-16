// Expenses Component
// import modules
import React from "react";
import axios from "axios";
import jwt_decode from "jwt-decode";
// import { Button } from "react-bootstrap";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      expensesTypes: "",
      amount: 1,
      createdAt: "",
      description: "",
      first_name: "",
      last_name: "",
      email: "",
    };
  }
  // handlerChange function
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  }
  //ComponentDidMount
  componentDidMount() {
    const token = localStorage.usertoken;
    const decoded = jwt_decode(token);
    this.setState({
      first_name: decoded.first_name,
      last_name: decoded.last_name,
      email: decoded.email,
    });
  }
  //handlerSubmit
  handlerSubmit(event) {
    event.preventDefault();
    axios
      .post("http://localhost:4040/expenses", {
        expensesTypes: this.state.expensesTypes,
        amount: this.state.amount,
        createdAt: this.state.createdAt,
        description: this.state.description,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        email: this.state.email,
      })
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert("Hello! fill the inputs above");
        console.log(err);
      });
  }
  // getAmountOfMoney
  getAmountOfMoney = (event) => {
    this.setState({
      amout: event.target.value,
    });
  };
  render() {
    return (
      // general form
      <form onSubmit={this.handlerSubmit.bind(this)}>
        <div className="myDiv">
          <label> Types of Expenses: </label>
          <br />
          {/* select input for expenses*/}
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
          {/* description input for expenses*/}
          <input
            type="text"
            name="description"
            value={this.state.description}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter description ..."
          ></input>
          <br />
          <label> Date : </label>
          <br />
          {/* createdAt input for expenses*/}
          <input
            type="date"
            name="createdAt"
            value={this.state.createdAt}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter date..."
          ></input>
          <br /> <br />
          <label> Amount : </label>
          <br />
          {/* amount input for expenses*/}
          <input
            type="number"
            name="amount"
            value={this.state.amount}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter amount..."
          ></input>
          <br /> <br />
          {/* Add transaction button send to db*/}
          <button variant="btn btn-success"> Add transaction</button>
        </div>
      </form>
    );
  }
}
export default Expenses;
