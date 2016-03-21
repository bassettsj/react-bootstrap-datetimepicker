import React, { Component } from "react";
import DateTimeField from "react-bootstrap-datetimepicker";

class ParentComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dateTime: "1990-06-05",
      format: "YYYY-MM-DD",
      inputFormat: "DD/MM/YYYY",
      viewMode: "date"
    };
  }

  handleChange = (newDate) => {
    console.log("newDate", newDate);
    return this.setState({date: newDate, showPicker: false});
  }

  render() {
    return (<DateTimeField
      onChange={this.handleChange}
      {...this.state}
    />);
  }
}

module.exports = ParentComponent;
