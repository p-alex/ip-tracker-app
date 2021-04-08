import React from "react";
import "./Search.scss";
export default function Search() {
  return (
    <form className="search">
      <label htmlFor="submit">Search</label>
      <input
        type="text"
        name="query"
        placeholder="Search for any IP address or domain"
      />
      <button type="submit" name="submit">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
}
