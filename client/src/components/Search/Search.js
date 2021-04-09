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
      <label htmlFor="submit">Search</label>
      <input
        type="text"
        name="query"
        placeholder="Search for any IP address or domain"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <button type="submit" name="submit">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
}
