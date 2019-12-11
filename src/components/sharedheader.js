import React from 'react';

function Sharedheader() {
  
  return (
    <nav className="navbar navbar-expand-sm bg-info navbar-dark">
    <ul className="navbar-nav">
    <li className="nav-item active">
      <a className="nav-link" href="#">Active</a>
    </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 1</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 2</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link 3</a>
      </li>
    </ul>
  
  </nav>
  );
}

export default Sharedheader;