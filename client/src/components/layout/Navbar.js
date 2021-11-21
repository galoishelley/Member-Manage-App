import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { logout } from '../../actions/authActions.js';

const Navbar = ({ auth: { isAuthenticated, user }, logout }) => {

  const guestLinks = (
    <Fragment>
      {/* <li>
        <Link to="#">Register</Link>
      </li> */}
      <li>
        <Link to="/login">Login</Link>
      </li>
    </Fragment>
  )

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/mbreward">Member's Reward</Link>
      </li>
      <li>
        <Link to="/member">Members</Link>
      </li>
      <li>
        <Link to="/reward">Rewards</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>

      <li><strong>Hello {user && user.email}</strong></li>
      <li>
        <a onClick={() => { logout() }} href="#!">
          <i className="material-icons">exit_to_app</i>
        </a>
      </li>
    </Fragment >
  )

  return (
    <nav>
      <div className="nav-wrapper">
        <a href="#" className="brand-logo">Member's reward</a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          {isAuthenticated ? authLinks : guestLinks}
        </ul>
      </div>
    </nav>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar);
