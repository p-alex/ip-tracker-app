import React from "react";
import "./Banner.scss";
export default function Banner({ children }) {
  return (
    <header
      className="banner"
      style={{ backgroundImage: `url(/images/pattern-bg.png)` }}
    >
      <div className="banner_container">
        <h1>IP Address Tracker</h1>
        {children}
      </div>
    </header>
  );
}
