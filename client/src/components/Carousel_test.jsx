import React, { useRef, useContext, useState, useEffect } from "react";
import "@fortawesome/fontawesome-free/css/all.min.css";

import "../style2.css"; 
import { CategoryContext }  from "../context//CategoryContext"; 

const PhotoCarousel = () => {
  const slideRef = useRef();
  const { photos } = useContext(CategoryContext); // get photos from context

  const [mainPhoto, setMainPhoto] = useState(photos && photos.length > 0 ? photos[0] : null);

  // Update main photo when photos change
  useEffect(() => {
    if (photos && photos.length > 0) {
      setMainPhoto(photos[0]);
    }
  }, [photos]);

  const handleNext = () => {
    const items = slideRef.current.querySelectorAll(".item");
    if (items.length > 0) {
      slideRef.current.appendChild(items[0]);
      // Update main photo to the new first item
      const newMainPhotoId = items[1]?.getAttribute('data-id'); // Next item becomes main
      if (newMainPhotoId) {
        const newMainPhoto = photos.find(photo => photo.id === newMainPhotoId);
        setMainPhoto(newMainPhoto);
      }
    }
  };
    const handlePrev = () => {
    const items = slideRef.current.querySelectorAll(".item");
    if (items.length > 0) {
      slideRef.current.prepend(items[items.length - 1]);
      // Update main photo to the new first item
      const newMainPhotoId = items[items.length - 1]?.getAttribute('data-id');
      if (newMainPhotoId) {
        const newMainPhoto = photos.find(photo => photo.id === newMainPhotoId);
        setMainPhoto(newMainPhoto);
      }
    }
  };

  const handleItemClick = (photo) => {
    setMainPhoto(photo);
  };

  if (!photos || photos.length === 0) {
    return <div>No photos available.</div>;
  }

  return (
    <div className="carousel">
      {/* Display main photo separately */}
       {/* <div className="main-photo">
        {mainPhoto && (
          <img 
            src={mainPhoto.image} 
            alt="Main" 
            className="main-photo-image"
          />
        )}
      </div>  */}

      <div className="slide" ref={slideRef}>
       {photos.map((photo) => (
        <div
          key={photo.id}
          className={`item ${mainPhoto?.id === photo.id ? "active" : ""}`}
          style={{
            backgroundImage: `url(${photo.image})`,
          }}
          onClick={() => setMainPhoto(photo)}
        ></div>
      ))}

      </div>

      <div className="button">
        <button className="prev" onClick={handlePrev}>
          Prev
        </button>
        <button className="next" onClick={handleNext}>
          Next
        </button>
      </div>
    </div>
  );
};

export default PhotoCarousel;

   
