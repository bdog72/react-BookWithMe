import React from 'react';
import { Link } from 'react-router-dom';
export function Header() {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg">
      <div className="container">
        <Link to="/rentals" className="navbar-brand">
          Book With Me
        </Link>
        <form className="form-inline my-2 my-lg-0">
          <input
            className="form-control mr-sm-2 bwm-search"
            type="search"
            placeholder="Try 'The Burg'"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success my-2 my-sm-0 btn-bwm-search"
            type="submit"
          >
            Search
          </button>
        </form>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav ml-auto">
            <a className="nav-item nav-link active" href="http://google.com">
              Login <span className="sr-only">(current)</span>
            </a>
            <a className="nav-item nav-link" href="http://google.com">
              Register
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
