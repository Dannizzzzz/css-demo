import { useEffect } from 'react';
import './index.css';

function Demo() {
  // Parallax Scrolling effect
  useEffect (() => {
    const translate = document.getElementsByClassName("translate");
    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset;
      for (const element of translate) {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      }
    })
  }, []);
  
  return (
    <div>
      <div className='main'>
        <div className="wrapper">
          <img src="images/demo03/ethosPic.jpg" alt='ethosPic' className='translate' data-speed="0.3" />
          <p className='translate' data-speed="-0.1">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
        </div>
      </div>
      <div className="rest">
        <p>We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
      </div>
    </div>
  );
}

export default Demo;