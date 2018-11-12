import React from "react";
import { Link } from "react-router-dom";

const MovieDetails = ({ movieDetail, characterDetails, loading }) => (
  <div>
    <h2>{movieDetail.title}</h2>
    <div className="detail-info">
      <div>
        <h3 className="detail-header">Opening Crawl: </h3>
        <p>{movieDetail.opening_crawl}</p>
      </div>
      <div>
        <h3 className="detail-header">Characters: </h3>
        {loading ? (
          <p>Finding characters...</p>
        ) : (
          <p>
            {characterDetails.map(char => (
              <span key={char.url} className="movie-chars">
                <Link
                  to={{
                    pathname: `/details/${char.name}`,
                    state: { details: char }
                  }}
                >
                  {char.name}
                </Link>
              </span>
            ))}
          </p>
        )}
      </div>
    </div>
  </div>
);

export default MovieDetails;
