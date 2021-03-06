import React from 'react';
import Sticky from 'react-stickynode';

const Sidebar = () => (
  <nav className="sidebar">
    <Sticky
      // Disable for mobile
      enabled={!!(window.innerWidth >= 900)}
    >
      <ul className="side-nav">
        <li className="side-nav__item side-nav__item--active">
          <a href="#0" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-home" />
            </svg>
            <span>Hotel</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#0" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-aircraft-take-off" />
            </svg>
            <span>Flight</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#0" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-key" />
            </svg>
            <span>Car rental</span>
          </a>
        </li>
        <li className="side-nav__item">
          <a href="#0" className="side-nav__link">
            <svg className="side-nav__icon">
              <use xlinkHref="/img/sprite.svg#icon-map" />
            </svg>
            <span>Tours</span>
          </a>
        </li>
      </ul>
    </Sticky>

    <div className="legal" id="legal">
      &copy; {new Date().getFullYear()} Bookflex
    </div>
  </nav>
);

export default Sidebar;
