import React from "react";

import { photos } from "../theme/assets/images/photos";
import Photo from "./Photo";

class Photos extends React.Component {
  render() {
    const photosJSX = photos.map(photo => {
      return <Photo key={photo.id} src={photo.src} secured={photo.secured} />;
    });
    return <div className="photos">{photosJSX}</div>;
  }
}

export default Photos;
