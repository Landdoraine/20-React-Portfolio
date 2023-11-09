import React from 'react';

function Header({ currentPage, handlePageChange }) {
  const navItems = [
    { id: 'about', label: 'About Me' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'contact', label: 'Contact' },
    { id: 'resume', label: 'Resume' },
  ];

  return (
    <header>
      <h1>Wenson Chen</h1>
      <ul className="nav navbar-tabs">
        {navItems.map(({ id, label }) => (
          <li className="navbar-item" key={id}>
            <a
              href={`#${id}`}
              onClick={() => handlePageChange(id)}
              className={`nav-link ${currentPage === id ? 'active' : ''}`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </header>
  );
}

export default Header;
