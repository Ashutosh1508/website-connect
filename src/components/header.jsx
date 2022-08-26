import React from "react";
import "./App.css";

function Header() {
  return (
    <header>
      <nav class="navbar navbar-dark bg-dark text-white text-align-centre">
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarToggleExternalContent"
          aria-controls="navbarToggleExternalContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <form class="d-flex justify-content-center" role="search">
          <input
            class="form-control me-2"
            type="search"
            placeholder="Enter Here"
            aria-label="Search"
          />
          <button class="btn btn-warning" type="submit">
            Search
          </button>
        </form>

        <p>Live Bids <span class="logged-out">●</span></p>
        <i class="fas-solid fas fa-user-plus"></i>
        

        <p>Help & Support</p>
      </nav>
    </header>
  );
}

export default Header;
