import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
  return (
    <nav className="navbar navbar-expand-md px-5 py-1" style={{ backgroundColor: '#fef7ef' }}>
      <div className="container-fluid">
        <h5 className="fw-bold mb-0 ms-2 display-4 logo">Portfolio</h5>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
          aria-controls="navbarContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto mb-2 mb-md-0 d-flex gap-md-4 text-center navcustom-gap fs-5">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  `nav-link fw-semibold d-flex align-items-center gap-1 ${isActive ? 'active' : 'textlink'
                  }`
                }
              >
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `nav-link fw-semibold d-flex align-items-center gap-1 ${isActive ? 'active' : 'textlink'
                  }`
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/project"
                className={({ isActive }) =>
                  `nav-link fw-semibold d-flex align-items-center gap-1 ${isActive ? 'active' : 'textlink'
                  }`
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  `nav-link fw-semibold d-flex align-items-center gap-1 ${isActive ? 'active' : 'textlink'
                  }`
                }
              >
                Skills
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  `nav-link fw-semibold d-flex align-items-center gap-1 ${isActive ? 'active' : 'textlink'
                  }`
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Header;
