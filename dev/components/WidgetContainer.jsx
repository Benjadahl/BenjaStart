import React from "react";
import ReactDOM from "react-dom";
import WidgetCard from "./WidgetCard.jsx";

var colours = [
  "#e74c3c",
  "#f39c12",
  "#2ecc71",
  "#9b59b6",
  "#3498db"
];

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { widgetsJSX: [] };
    this.widgetTotalIndex = 0;
  }
  cardClick(link, index){
    console.log(this.state);
    //this.refs.txtLink.value = link;
    this.setState({
      lastClicked: index
    });
  }
  removeWidget(){
    console.log(this.state.lastClicked);
    let widgetsJSX = this.state.widgetsJSX;
    delete widgetsJSX[this.state.lastClicked];
    this.setState({
      widgetsJSX: widgetsJSX
    });
  }
  addWidget(userLink, x, y) {
    let colourIndex = this.widgetTotalIndex
    if(this.widgetTotalIndex >= colours.length){
      colourIndex = this.widgetTotalIndex % colours.length;
    }
    let widgetsJSX = this.state.widgetsJSX;
    console.log(widgetsJSX);
    widgetsJSX[this.widgetTotalIndex] = (
      <WidgetCard
        style={{
          backgroundColor: colours[colourIndex],
          marginLeft: x,
          marginTop: y,
          height: 100,
          width: 150
        }}
        key={this.widgetTotalIndex}
        index={this.widgetTotalIndex}
        onClick={this.cardClick.bind(this)}
        userLink={userLink}
        >
      </WidgetCard>
    );
    this.widgetTotalIndex++;
    this.setState({widgetsJSX: widgetsJSX});
  }
  componentWillMount() {
    this.addWidget("http://google.com", 250, 250);
    this.addWidget("http://reddit.com", 350, 350);
  }
  render() {
    return (
      <div>
        <button onClick={ () => this.addWidget(prompt("Insert link:", "http://google.com"), 500, 10) }>Add new widget</button>
        &nbsp;
        <button onClick={this.removeWidget.bind(this)}>Delete last clicked widget</button>
        <hr />
        {this.state.widgetsJSX}
      </div>
    );
  }
};

module.exports = WidgetContainer;
