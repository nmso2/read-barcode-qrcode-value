import React, { Component } from "react";
import BarcodeReader from "react-barcode-reader";

export default class Home3 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      result: "No result",
    };

    this.handleScan = this.handleScan.bind(this);
  }
  handleScan(result) {
    if (result) {
      this.setState({ result });
    }
  }
  handleError(err) {
    console.error(err);
  }
  render() {
    return (
      <div>
        <BarcodeReader onError={this.handleError} onScan={this.handleScan} />
        <p>{this.state.result}</p>
      </div>
    );
  }
}
