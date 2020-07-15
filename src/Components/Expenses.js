// Expenses Component
import React from "react";
import axios from "axios";
// import { Button } from "react-bootstrap";
import Trans from "./Trans";

class Expenses extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Trans: [],
    };
  }
  // handlerChange
  handlerChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
    console.log(event.target.name);
  }
  //handlerSubmit
  handlerSubmit(event) {
    event.preventDefault();
    axios
      .get("http://localhost:4040/expenses")
      .then((res) => {
        const finalResult = res.data;
        this.setState({ Trans: finalResult });
        console.log(finalResult);
      })
      .catch((err) => {
        alert("Hello!!");
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
          <label> Expenses List: </label>
          <br />
          <button onClick={this.handlerSubmit.bind(this)}> Show Trans</button>
          <button variant="btn btn-success"> Show Expenses</button>
          <Trans Trans={this.state.Trans} />
          {/* <ul>
            {this.state.Trans.map((element, index) => (
              <li key={index}>
                {element.expensesTypes}....{element.amount}...
                {element.description}
              </li>
            ))}
          </ul> */}
        </div>
      </form>
    );
  }
}
export default Expenses;
