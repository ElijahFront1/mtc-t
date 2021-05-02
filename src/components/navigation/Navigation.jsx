import React from 'react'
import { NavLink } from 'react-router-dom';

function Navigation() {
    return (
        <div>
            <NavLink to="/home" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-speedometer2 menu__item__icon"></i>
              Home
            </NavLink>
            <NavLink to="/Time" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-clock menu__item__icon"></i>
              Time Managment
            </NavLink>
            <NavLink to="/Inbox" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-inbox menu__item__icon"></i>
              Inbox
            </NavLink>
            <NavLink to="/Calendar" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-calendar-date menu__item__icon"></i>
              Calendar
            </NavLink>
            <NavLink to="/Analytics" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-graph-up menu__item__icon"></i>
              Analytics
            </NavLink>
            <NavLink to="/Settings" className="menu__item d-flex" activeClassName="activeLink">
                <i className="bi bi-gear-fill menu__item__icon"></i>
              Settings
            </NavLink>
        </div>
    )
}

export default Navigation
