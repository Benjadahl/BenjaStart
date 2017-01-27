import React from "react";
import ReactDOM from "react-dom";

class WidgetCard extends React.Component {
  render() {
    return (
      <div
        style={this.props.style}
        className="WidgetCard"
        onClick={() => {this.props.onClick()}} >
        { this.props.children }
      </div>
    );
  }
};

WidgetCard.propTypes = {
  backgroundColor: React.PropTypes.string
}

WidgetCard.defaultProps = {
  backgroundColor: "#e74c3c",
  width: "100",
  height: "100",
  "x": "0",
  "y": "0"
}

module.exports = WidgetCard;
