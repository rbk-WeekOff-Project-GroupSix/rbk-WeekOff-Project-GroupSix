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
      <form onSubmit={this.props.componentDidMount}>
        <div>
        <label> text :  </label><br/>
          <input
            type="txt"
            text="movie"
            value={this.state.movie}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter text..."
          ></input>{" "}
          <br /> <br />
          <label> amount :  </label><br/>
          <input
            type="txt"
            text="text"
            value={this.state.text}
            onChange={this.handlerChange.bind(this)}
            placeholder="Enter amount..."
          ></input>
          <br /> <br />
          <button onClick={this.handlerSubmit.bind(this)}> Add transaction</button>
        </div>
      </form>
    );
  }
}
export default addTransaction;
