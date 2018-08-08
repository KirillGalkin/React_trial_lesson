import React from "react";

class Header extends React.Component {
  render() {
    return (
      <div className="header">
        <div>
          <a />
        </div>
        <input placeholder="Search" type="text" />
        <nav>
          <a className="explore" />
          <a className="likes" />
          <a className="settings" />
        </nav>
      </div>
    );
  }
}

export default Header;
