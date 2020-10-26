import React from 'react';
import "./Navbar.css";
import { Link,NavLink,withRouter } from 'react-router-dom';

const Navbar =(props) => {
      // setTimeout(() => {props.history.push("/About")},10000)
    return (
      <div>
        <nav className="nav-wrapper blue darken-3">
          <div className="container">
            <a href="#logo" className="brand-logo">
              Booking.ng
            </a>
            <a
              href="#nav"
              className="sidenav-trigger"
              data-target="mobile-menu"
            >
              <i className="material-icons fa fa-bars"></i>
            </a>
            <ul className="right hide-on-med-and-down">
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
              <NavLink to="/About">About Developer</NavLink>
              </li>
              <li>
              <NavLink to="/Bookreservation">Booking reservation</NavLink>
              </li>
              <li>
                <a
                  href="#null"
                  className="tooltipped btn-floating btn-small indigo darken-4"
                  data-tooltip="instagram"
                >
                  <i className="fa fa-instagram"></i>
                </a>
              </li>
              <li>
                <a
                  href="#null"
                  className="tooltipped btn-floating btn-small indigo darken-4"
                  data-tooltip="facebook"
                >
                  <i className="fa fa-facebook"></i>
                </a>
              </li>
              <li>
                <a
                  href="#null"
                  className="tooltipped btn-floating btn-small indigo darken-4"
                  data-tooltip="twitter"
                >
                  <i className="fa fa-twitter"></i>
                </a>
              </li>
            </ul>
            <ul className="sidenav grey lighten-2" id="mobile-menu">
            <li>
                <Link to="/Home">Home</Link>
              </li>
              <li>
              <NavLink to="/About">About Developer</NavLink>
              </li>
              <li>
              <NavLink to="/Bookreservation">Booking reservation</NavLink>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }


export default withRouter (Navbar);
