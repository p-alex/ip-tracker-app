import React, { useState } from "react";
import "./Search.scss";
import {
  fetchGeolocationSearch,
  resetGeolocation,
} from "../../actions/geolocation";
import { useDispatch } from "react-redux";
export default function Search() {
  const dispatch = useDispatch();
  const [query, setQuery] = useState("");
  const handleSubmit = async (e, query) => {
    e.preventDefault();
    setQuery("");
    await dispatch(resetGeolocation());
    dispatch(fetchGeolocationSearch(query));
  };
  return (
    <form className="search" onSubmit={(e) => handleSubmit(e, query)}>
      <label>
        <input
          type="text"
          name="query"
          id="query"
          placeholder="Search for any IP address or domain"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          title
          undefined
        />
      </label>

      <button type="submit" name="submit" title="undefined">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
}
