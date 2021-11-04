import PropTypes from 'prop-types';
import React from 'react';
import '../styles/Header.css';

function Header({ disable }) {
  function logout() {
    localStorage.clear();
    window.location.href = '/'; // Solution src: https://stackoverflow.com/questions/45552515/how-to-logout-in-react
  }

  return (
    <header className="title">
      <h2>Ebytr</h2>
      {
        !disable
      && (
        <button
          type="button"
          className="btn btn-outline-dark"
          onClick={ logout }
        >
          Logout
        </button>
      )
      }
    </header>
  );
}

Header.propTypes = {
  disable: PropTypes.bool.isRequired,
};

export default Header;
