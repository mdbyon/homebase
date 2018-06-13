import React, { Component } from "react";
import { Redirect } from "react-router";

export default class ListingsModalPage extends Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    this.props.requests.requestDetails();
  }

  render() {
    var existsPictures = this.props.photos ? <div className="hero" /> : <div />;
    return <div className="listingsModal"> {existsPictures} </div>;
  }
}
