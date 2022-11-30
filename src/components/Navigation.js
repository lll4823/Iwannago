import React from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <div className="nav">
      <Link to="/">Home</Link>
      <Link to="/about">Saying</Link>
      <Link to="/Youtube">Youtube</Link>
      <Link to="/Google">GOOGLE</Link>
    </div>
  );
}

export default Navigation;
