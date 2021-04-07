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
        value="192.212.174.101"
      />
      <button type="submit" name="submit">
        <i className="fas fa-chevron-right"></i>
      </button>
    </form>
  );
}
