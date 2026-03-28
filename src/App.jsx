import React from "react";
import ImageCard from "./components/ImageCard";
import images from "./data/images";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container">
        <h1>Dynamic Image Gallery</h1>

        <div className="gallery">
          {images.map((img) => (
            <ImageCard key={img.id} image={img} />
          ))}
        </div>
      </div>
    </>
  );
};

export default App;