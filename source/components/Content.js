import React from "react";

import Profile from "./Profile";
import Photos from "./Photos";

class Content extends React.Component {
  render() {
    return (
      <div className="content">
        <Profile />
        <Photos />
      </div>
    );
  }
}

export default Content;
