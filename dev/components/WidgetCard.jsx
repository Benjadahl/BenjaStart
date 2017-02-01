import React from "react";
import ReactDOM from "react-dom";
import Draggable from "react-draggable";

class WidgetCard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      userLink: this.props.userLink
    };
  }
  render() {
    var style = {
      textDecoration: "none",
      color: "white",
      position: "absolute",
      top: "50%",
      left: "50%",
      marginRight: "50%",
      transform: "translate(-50%, -50%)",
      fontFamily: "arial"
    };
    return (
      <Draggable>
        <div
          style={this.props.style}
          className="WidgetCard"
          onClick={() => {this.props.onClick(this.state.userLink, this.props.ref)}} >
          <a style={style} href={ this.state.userLink }>
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
