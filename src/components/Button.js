// REACT
import React from "react";

class Button extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <>
        {/* BUTTON CHANGE BACKGROUND WHEN ACTIVE */}

        <button
          onClick={() => this.props.onClick(this.props.children.toLowerCase())}
          className={`btn btn${
            this.props.isSelected ? "" : "-outline"
          }-primary m-2`}
        >
          {this.props.children}
        </button>
      </>
    );
  }
}

export default Button;
