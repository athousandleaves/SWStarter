import React from "react";
import { Link } from "react-router-dom";

const Results = props => (
  <div className="MatchesBG">
    <h2 className="results-header">Results</h2>
    {props.loading ? (
      <div className="matches-text">Searching...</div>
    ) : !props.searchResults ? (
      <div className="matches-text ">
        There are zero matches. <br/> Use the form to search for People and Movies.
      </div>
    ) : (
      props.searchResults.results.map(result => (
        <div className="result-name" key={result.name || result.title}>
          <span className="result-text">{result.name || result.title}</span>
          <span className="result-btn">
            <Link
              to={{
                pathname: `/details/${result.name || result.title}`,
                state: { details: result }
              }}
            >
              <button className="btn">
                <strong className="button-text">SEE DETAILS</strong>
              </button>
            </Link>
          </span>
        </div>
      ))
    )}
  </div>
);

export default Results;