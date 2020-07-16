import React from "react";
import ReactDOM from "react-dom";
import axios from "axios";
import Trans from "./Trans";
class TransList extends React.Component {
  state = {
    Trans: [],
  };

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
        console.log(err);
      });
  }
  render() {
    return (
      <React.Fragment>
        <div> Hello </div>
        <button onClick={this.handlerSubmit.bind(this)}> Show Trans</button>
        {/* <Trans TransArr={this.state.Trans} /> */}
      </React.Fragment>
    );
  }
}
export default TransList;
