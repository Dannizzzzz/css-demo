// import { useEffect, useState } from 'react';
import ImageSlider from './imageSlider';
import './index.css';

function Demo() {
  // Banner Quick Switch effect
  const slides = [
    {url: 'http://localhost:3000/images/demo04/test1.jpg', title: "test1"},
    {url: 'http://localhost:3000/images/demo04/test2.jpg', title: "test2"},
    {url: 'http://localhost:3000/images/demo04/test3.jpg', title: "test3"},
    {url: 'http://localhost:3000/images/demo04/test4.jpg', title: "test4"},
  ]
  return (
    <div className='container'>
      <ImageSlider slides={slides} />
    </div>
  );
}

export default Demo;