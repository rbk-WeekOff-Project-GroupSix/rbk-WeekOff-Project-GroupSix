import React from "react";
import ReactDOM from "react-dom";

class Trans extends React.Component {
  render() {
    const { Trans } = this.props;
    return (
      <div>
        <ul>
          {Trans.map((element, index) => (
            <li>
              {element.expensesTypes}....{element.amount}...
              {element.description}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
export default Trans;
