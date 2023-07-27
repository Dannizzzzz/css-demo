// import { useEffect } from 'react';
import './index.css';

function Demo() {
  // Venetian Blind Transition effect
  // useEffect (() => {
  //   const itemScrolling = document.getElementsByClassName("items-scrolling");
  //   window.addEventListener("scroll", () => {
  //     let scroll = window.pageYOffset;
  //     for (const element of itemScrolling) {
  //       let speed = element.dataset.speed;
  //       element.style.transform = `translateY(${scroll * speed}px)`;
  //     }
  //   })
  // }, []);

  return (
    <div className='container'>
      <div className='rest'></div>
      <div className='bg-colour'></div>
      <div className='items-scrolling' data-speed='0.2'>
        <div className='row'>
          <div>
            <img src="images/demo06/test1.jpg" alt=''/>
          </div>
          <div>
            <img src="images/demo06/test2.jpg" alt=''/>
          </div>
        </div>
        <div className='row'>
          <div>
            <img src="images/demo06/test1.jpg" alt=''/>
          </div>
          <div>
            <img src="images/demo06/test2.jpg" alt=''/>
          </div>
        </div>
        <div className='row'>
          <div>
            <img src="images/demo06/test1.jpg" alt=''/>
          </div>
          <div>
            <img src="images/demo06/test2.jpg" alt=''/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Demo;