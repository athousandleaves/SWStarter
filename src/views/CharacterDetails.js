import React from "react";
import { Link } from "react-router-dom";

const CharacterDetails = ({ charDetail, movieDetails, loading }) => (
  <div>
    <h2>{charDetail.name}</h2>
    <div className="detail-info">
      <div>
        <h3>Details</h3>
        <hr />
        <ul>
          <li>Birth year: {charDetail.birth_year}</li>
          <li>Gender: {charDetail.gender}</li>
          <li>Eye Color: {charDetail.eye_color}</li>
          <li>Hair Color: {charDetail.hair_color}</li>
          <li>Height: {charDetail.height}</li>
          <li>Mass: {charDetail.mass}</li>
        </ul>
      </div>
      <div>
        <h3>Movies</h3>
        <hr />
        {loading ? (
          <p>Finding films...</p>
        ) : (
          <ul>
            {movieDetails.map(film => (
              <li key={film.url}>
                <Link
                  to={{
                    pathname: `/details/${film.title}`,
                    state: { details: film }
                  }}
                >
                  {film.title}
                </Link>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  </div>
);

export default CharacterDetails;
