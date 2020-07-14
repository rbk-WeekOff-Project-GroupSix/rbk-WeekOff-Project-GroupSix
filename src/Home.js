import React, { Component } from "react";
import AddTransaction from "./Components/AddTransaction/AddTransaction";
import firebase from "firebase";
import { Button } from "react-bootstrap";
import Header from "./Components/Header/logo";
import ExpenseAndIncome from "./Components/incomeandExpense/expenseAndIncode";
import List from "./Components/listTransication/list1";
import Income from "./Components/incomeFomr/ienterIncome";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      amount: 1,
    };
  }
  kal(par) {
    this.setState({
      amount: par,
    });
  }
  render() {
    return (
      <div
        className="App"
        style={{ display: "flex", justifyContent: "center", padding: 30 }}
      >
        <div>
          <Header state={this.state} />
          <AddTransaction />
        </div>

        {/*
        <List/>
        <Income amountFromFather={this.kal.bind(this)} />
        <ExpenseAndIncome />
    */}
      </div>
    );
  }
}

export default Home;
