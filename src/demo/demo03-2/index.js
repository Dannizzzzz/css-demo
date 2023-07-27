import { useEffect } from 'react';
import './index.css';

function Demo() {
  // Parallax Scrolling effect
  useEffect (() => {
    const translate = document.getElementsByClassName("translate");
    const upper = document.getElementById("wrap");
    const imgWrap = document.getElementById("imgWrap");
    const imgTran = document.getElementsByClassName("imgTran");
    let upperDistance = upper.offsetTop;
    let imgWrapWidth = imgWrap.clientHeight;

    window.addEventListener("scroll", () => {
      let scroll = window.pageYOffset.toFixed();
      if (scroll >= upperDistance && scroll <= (upperDistance + imgWrapWidth)) {
        var res = (scroll - upperDistance) * 0.4
        for (const element of imgTran) {
          // element.style.transform = "translateY(50px) scale(1.5)";
          element.style.transform = `translateY(${res}px) scale(1.3)`;
        }
      }
      for (const element of translate) {
        let speed = element.dataset.speed;
        element.style.transform = `translateY(${scroll * speed}px)`;
      }
    })
  }, []);

  return (
    <div>
      <div className="top">
        <p>We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
      </div>
      <div className='main'>
        <div className="wrapper" id='wrap'>
          <div className='imgWrapper translate' data-speed="0.15"  id='imgWrap'>
            <img className='imgTran' src="images/demo03/ethosPic.jpg" alt='ethosPic'/>
          </div>
          <p className='translate' data-speed="0.25">We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
        </div>
      </div>
      <div className="bottom">
        <p>We ensure everything about your stay is immaculate, from the pillowy white Etro cotton sheets dressing your bed to the thoughtfully-placed garden-grown herb garnishes on your plate.</p>
      </div>
    </div>
  );
}

export default Demo;