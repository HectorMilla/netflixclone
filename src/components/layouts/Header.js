import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="logo">
          <img
            src="https://fontmeme.com/permalink/180905/bb2c3193d22dedc586f847c2e68b74d3.png"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <div className="nav-link">
            <Link to="/">Home</Link>
          </div>
          <div className="nav-link">
            <Link to="/tvshows">TV Shows</Link>
          </div>
          <div className="nav-link">
            <Link to="/movies">Movies</Link>
          </div>
          <div className="nav-link">
            <Link to="/recentlyadded">Recently Added</Link>
          </div>
          <div className="nav-link">
            <Link to="/mylist">My List</Link>
          </div>
        </div>
        <div className="nav-tools">
          <i className="fas fa-search tools" />
          <i className="fas fa-bell tools" />

          <img
            src="https://elcorreodelsol.com/sites/default/files/avatares/asainaang.jpg"
            alt="profile"
          />
          <i className="fas fa-caret-down" />
        </div>
      </div>
    );
  }
}
export default Header;
