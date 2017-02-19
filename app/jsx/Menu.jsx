import React from 'react';

class Menu extends React.Component {
  constructor(props) {
    super(props);
  }

  tempClickHandler() {
    console.log('click');
  }

  render() {
    return (
      <div className="menu">
        <div onClick={this.tempClickHandler}>
          first
        </div>
        <div onClick={this.tempClickHandler}>
          second
        </div>
        <div onClick={this.tempClickHandler}>
          third
        </div>
      </div>
    );
  }
}

export default Menu;
