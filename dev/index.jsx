import React from "react";
import ReactDOM from "react-dom";
import WidgetCard from "./components/WidgetCard.jsx";

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { widgetsJSX: [] };
  }
  handleClick() {
    this.addWidget("red", 50, 10);
  }
  addWidget(backgroundColor, x, y) {
    var widgetsJSX = this.state.widgetsJSX;
    console.log(widgetsJSX);
    widgetsJSX.push(
      <WidgetCard
        style={{
          backgroundColor: backgroundColor,
          marginLeft: x,
          marginTop: y,
          height: 100,
          width: 100
        }}
        key={widgetsJSX.length}
        onClick={() => this.handleClick()}>
        test1
      </WidgetCard>
    );

    this.setState({widgetsJSX: widgetsJSX});
  }
  componentWillMount() {
    this.addWidget("blue", 250, 250);
    this.addWidget("green", 350, 350);
  }
  render() {
    return (
      <div>
        {this.state.widgetsJSX}
      </div>
    );
  }
};

ReactDOM.render(
  <div>
    <WidgetContainer/>
  </div>,
  document.querySelector("#container")
);
