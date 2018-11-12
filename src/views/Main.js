import React, { Component } from "react";
import SearchContainer from "./SearchContainer";
import Results from "./Results";

export default class Home extends Component {
  constructor() {
    super();
    this.state = {
      loading: false,
      searchResults: null,
      details: null
    };
  }

  render() {
    return (
      <div className="main">
        <SearchContainer search={this.search} loading={this.state.loading} />
        <Results
          searchResults={this.state.searchResults}
          loading={this.state.loading}
        />
      </div>
    );
  }
}
