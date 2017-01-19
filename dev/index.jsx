import React from "react";
import ReactDOM from "react-dom";

var WidgetCard = React.createClass({
  render: function() {
    return (
      <div className="WidgetCard" style={{backgroundColor: this.props.backgroundColor, width: this.props.width.toString() + "px", height: this.props.height.toString() + "px"}}>
        { this.props.children }
      </div>
    );
  }
});

WidgetCard.propTypes = {
  backgroundColor: React.PropTypes.string
}

WidgetCard.defaultProps = {
  backgroundColor: "#e74c3c",
  width: "100",
  height: "100"
}

ReactDOM.render(
  <div>
    <WidgetCard width="100" height="1000" >
      <p>test</p>
    </WidgetCard>
  </div>,
  document.querySelector("#container")
);
