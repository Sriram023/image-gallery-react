import React from "react";

const ImageCard = ({ image }) => {
  return (
    <>
      <div className="card">
        <img src={image.url} alt={image.title} />
        <div className="card-content">
          <h3>{image.title}</h3>
          <p>{image.description}</p>
        </div>
      </div>
    </>
  );
};

export default ImageCard;