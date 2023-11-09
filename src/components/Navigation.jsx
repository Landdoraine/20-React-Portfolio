import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const navItems = [
  { path: '/about', label: 'About Me' },
  { path: '/portfolio', label: 'Portfolio' },
  { path: '/contact', label: 'Contact' },
  { path: '/resume', label: 'Resume' },
];

function Navigation() {
  const location = useLocation();

  return (
    <nav>
      <ul>
        {navItems.map(({ path, label }) => (
          <li key={path}>
            <Link to={path} className={location.pathname === path ? 'active' : ''}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
