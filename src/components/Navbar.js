import React, { useState } from "react";
import { Link, BrowserRouter } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLocationDot,
  faSearch,
  faTimes,
  faHome,
  faAddressBook,
  faInfoCircle,
  faCog,
} from "@fortawesome/free-solid-svg-icons";
import "./Navbar.css";
const Navbar = ({ setSearchByName, setSearchByLocation }) => {
  const [searchOpen, setSearchOpen] = useState(false);

  const toggleSearchModal = () => {
    setSearchOpen(!searchOpen);
  };

  return (
    <nav>
      <ul>
        <li>
          <Link to="/">
            <FontAwesomeIcon icon={faHome} />
            Home
          </Link>
        </li>
        <li>
          <Link to="/about">
            <FontAwesomeIcon icon={faInfoCircle} />
            About
          </Link>
        </li>
        <li>
          <Link to="/gallery">
            <FontAwesomeIcon icon={faInfoCircle} />
            Gallery
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <FontAwesomeIcon icon={faAddressBook} />
            Contact
          </Link>
        </li>
       {/*  <li>
          <Link to="/destination">
            <FontAwesomeIcon icon={faLocationDot} />
            destination
          </Link>
  </li>*/}
      </ul>
      <div className="button-icon">
        <div className="action">
          <FontAwesomeIcon icon={faSearch} onClick={toggleSearchModal}   />
          <Link to="/SignInPage" className="signup-button">
            Sign In
          </Link>
        </div>
        {searchOpen && (
          <div className="search-modal">
            <button className="close-button" onClick={toggleSearchModal}>
              <FontAwesomeIcon icon={faTimes}  />
            </button>
            <input
              type="text"
              placeholder="Nom hotel..."
              onChange={(e) => setSearchByName(e.target.value)}
            />
            <input
              type="text"
              placeholder="location hotel..."
              onChange={(e) => setSearchByLocation(e.target.value)}
            />
            {/* <button onClick={handleSearch}>Search</button> */}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
