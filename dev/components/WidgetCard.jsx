import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class WidgetCard extends React.Component {
  render() {
    return (
      <Draggable>
        <div
          style={this.props.style}
          className="WidgetCard"
          onClick={() => {this.props.onClick()}} >
          <a href={ this.props.userLink }>
            { this.props.children }
          </a>
        </div>
      </Draggable>
    );
  }
};

WidgetCard.propTypes = {
  backgroundColor: React.PropTypes.string,
  width: React.PropTypes.number,
  height: React.PropTypes.number,
  x: React.PropTypes.number,
  y: React.PropTypes.number
}

WidgetCard.defaultProps = {
  backgroundColor: "#e74c3c",
  width: "100",
  height: "100",
  x: "0",
  y: "0"
}

module.exports = WidgetCard;
