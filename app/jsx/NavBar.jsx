import React from 'react';
import Menu from './Menu.jsx';

class NavBar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="appName">
          <h1>Working name</h1>
        </div>
        <Menu />
      </div>
    );
  }
}

export default NavBar;
