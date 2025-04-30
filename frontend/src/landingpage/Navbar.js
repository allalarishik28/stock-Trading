import React from 'react';
import { Link } from 'react-router-dom';
import TopBar from './TopBar';

function Navbar({isLoggedIn, setIsLoggedIn}) {
  const[a, setA] = React.useState(false);
  return (
    <>
      {!isLoggedIn ? (
        <nav
          className="navbar navbar-expand-lg border-bottom"
          style={{ backgroundColor: "#FFF", padding: "10px 5%" }}
        >
          <div className="container d-flex justify-content-between align-items-center">
            {/* Logo Section */}
            <Link className="navbar-brand" to="/">
              <img
                src="media/image.svg"
                style={{ height: "40px", width: "75px" }}
                alt="Logo"
              />
            </Link>

            {/* Navbar Links */}
            <div className="collapse navbar-collapse d-flex justify-content-end">
              <ul className="navbar-nav d-flex gap-4">
                <li className="nav-item">
                  <Link className="nav-link" to="/login">
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/about">
                    About
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/product">
                    Product
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/pricing">
                    Pricing
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/support">
                    Support
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      ) : (
        <TopBar isLoggedIn = {isLoggedIn} setIsLoggedIn = {setIsLoggedIn} />
      )}
    </>
  );
}

export default Navbar;
