import React from "react";

const SearchForm = ({
  handleRadioSelect,
  handleSubmit,
  handleTextChange,
  selected,
  value,
  loading
}) => (
  <form className="search-form" onSubmit={handleSubmit}>
    <div className="radio-group">
      <label htmlFor="people">
        <input
          type="radio"
          className="radio-btn"
          value="people"
          name="people"
          checked={selected === "people"}
          onChange={handleRadioSelect}
        />
        People
      </label>
      <label htmlFor="movies">
        <input
          type="radio"
          className="radio-btn"
          value="films"
          name="movies"
          checked={selected === "films"}
          onChange={handleRadioSelect}
        />
        Movies
      </label>
    </div>
    <div className="text-input-container">
      <input
        type="text"
        className="text-input"
        value={value}
        placeholder={
          selected === "people"
            ? "e.g. Chewbacca, Yoda, Boba Fett"
            : "e.g. Attack of the Clones, The Phantom Menace"
        }
        onChange={handleTextChange}
      />
    </div>
    <div>
      <button type="submit" disabled={!value} className="btn search-btn">
        <strong className="button-text">
          {loading ? "SEARCHING..." : "SEARCH"}
        </strong>
      </button>
    </div>
  </form>
);

export default SearchForm;
