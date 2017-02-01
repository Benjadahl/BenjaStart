import React from "react";
import ReactDOM from "react-dom";
import WidgetCard from "./WidgetCard.jsx";

class WidgetContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { widgetsJSX: [] };
  }
  cardClick(link){
    console.log(this.state);
    console.log(link);
    console.log(this.refs.txtLink);
    this.refs.txtLink.value = link;
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
        onClick={this.cardClick.bind(this)}
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
        &nbsp;
        <input type="text" ref="txtLink" value={"test"}/>
        <hr />
        {this.state.widgetsJSX}
      </div>
    );
  }
};

module.exports = WidgetContainer;
