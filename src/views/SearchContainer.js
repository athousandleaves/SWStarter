import React, { Component } from "react";
import SearchForm from "./SearchForm";

export default class SearchContainer extends Component {
  constructor() {
    super();
    this.state = {
      selected: "people",
      value: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    this.props.search(this.state.selected, this.state.value);
  };

  handleTextChange = e => {
    this.setState({ value: e.target.value });
  };

  handleRadioSelect = e => {
    this.setState({ selected: e.target.value });
  };

  render() {
    return (
      <div className="SearchContainer">
        <h3>What are you searching for?</h3>
        <SearchForm
          selected={this.state.selected}
          value={this.state.value}
          handleRadioSelect={this.handleRadioSelect}
          handleTextChange={this.handleTextChange}
          handleSubmit={this.handleSubmit}
          loading={this.props.loading}
        />
      </div>
    );
  }
}
