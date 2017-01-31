import React from "react";
import ReactDOM from "react-dom";
import WidgetCard from "./WidgetCard.jsx";

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { widgetsJSX: [] };
  }
  handleClick() {
    this.addWidget("red", 50, 10);
  }
  addWidget(backgroundColor, userLink, x, y) {
    let widgetsJSX = this.state.widgetsJSX;
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
        onClick={() => this.handleClick()}
        userLink={userLink}
        >
        test1
      </WidgetCard>
    );

    this.setState({widgetsJSX: widgetsJSX});
  }
  componentWillMount() {
    this.addWidget("blue", "http://google.com", 250, 250);
    this.addWidget("green","http://reddit.com", 350, 350);
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.addWidget(prompt("color"), "http://google.com", 500, 10) }>Add new widget</button>
        {this.state.widgetsJSX}
      </div>
    );
  }
};

module.exports = WidgetContainer;
