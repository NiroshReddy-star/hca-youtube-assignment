import React, { useState } from "react";

const Search = (props) => {
  const [active, setActive] = useState(0);
  const handleKeyUp = (e) => {
    props.onChange(e.target.value);
  };

  const handleLinkClick = (e) => {
    const id = parseInt(e.target.id);
    setActive(id);
    let term = "HCA";
    if (id === 1) {
      term = "Covid-19 Vaccine Podcast Series";
    }
    props.onChange(term);
  };

  return (
    <div className="search-box">
      <nav className="navbar navbar-expand-lg  navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          HCA Video Library
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className={`nav-item ${active === 0 ? "active" : ""}`}>
              <button
                id="0"
                className="btn btn-outline btn-link nav-btn"
                onClick={handleLinkClick}
              >
                All Videos
              </button>
            </li>
            <li className={`nav-item ${active === 1 ? "active" : ""}`}>
              <button
                id="1"
                className="btn btn-outline btn-link nav-btn"
                onClick={handleLinkClick}
              >
                Covid Videos
              </button>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
              onKeyUp={handleKeyUp}
            />
            <button
              className="btn btn-outline-success my-2 my-sm-0"
              type="submit"
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Search;
