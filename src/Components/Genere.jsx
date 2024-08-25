import React from 'react';

function Genere({ images }) {
    if (!images || images.length === 0) {
      return <div>No images available</div>;
    }
  
    return (
      <div>
        {images.map((item, index) => (
          <img key={index} src={item.image} alt={`image-${index}`} />
        ))}
      </div>
    );
  }
  

export default Genere;
