import React, { Component } from "react";
import CharacterDetails from "./CharacterDetails";
import MovieDetails from "./MovieDetails";
import { Link } from "react-router-dom";

export default class DetailsContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      details: [],
      loading: true,
      urls:
        this.props.location.state.details.characters ||
        this.props.location.state.details.films
    };
  }

  fetchResources = urls => {
    Promise.all(urls.map(url => fetch(url))).then(res => {
      Promise.all(res.map(blob => blob.json())).then(details => {
        details.forEach(item =>
          localStorage.setItem(item.url, JSON.stringify(item))
        );
        this.setState({
          details: [...this.state.details, ...details],
          loading: false
        });
      });
    });
  };

  render() {
    const detail = this.props.location.state.details;
    return (
      <div className="DetailsBG">
        {detail.name ? (
          <CharacterDetails
            charDetail={detail}
            movieDetails={this.state.details}
            loading={this.state.loading}
          />
        ) : (
          <MovieDetails
            movieDetail={detail}
            characterDetails={this.state.details}
            loading={this.state.loading}
          />
        )}
        <div className="back-btn">
          <Link
            to={{
              pathname: `/`
            }}
          >
            <button className="btn">
              <strong className="button-text">BACK TO SEARCH</strong>
            </button>
          </Link>
        </div>
      </div>
    );
  }
}
