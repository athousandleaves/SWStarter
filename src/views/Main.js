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
  search = (resource, query) => {
    this.setState({ loading: true });
    fetch(`https://swapi.co/api/${resource}/?search=${query}`)
      .then(res => res.json())
      .then(results => {
        results.count
          ? this.setState({ searchResults: results, loading: false })
          : this.setState({ loading: false });
      })
      .catch(err => console.log(err));
  };
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
