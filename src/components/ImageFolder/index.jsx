import React from 'react';
import "./style.css";
import image from "../../image/formImage.jpg"

const ImageForm = () => {
  return (
    <div>
        <img className='image' src={image} alt="formpics.jpg" />
    </div>
  )
}

export default ImageForm