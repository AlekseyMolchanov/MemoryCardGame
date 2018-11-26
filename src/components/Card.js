import React, { Component } from "react";

export default class Card extends Component {
  state = {
    open: false
  };
  render() {
    return <div onClick={this.props.Flip}>{this.props.title}</div>;
  }
}
