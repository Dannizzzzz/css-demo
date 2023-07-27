import { useEffect } from 'react';
import './index.css';

function Demo() {
  // Horizontal Scrolling effect
  useEffect(()=>{
    function scrollH(e) {
      e.preventDefault();
      document.querySelector('.container').scrollLeft += e.deltaY;
    }
    if (document.querySelector('.container').addEventListener) {
      document.querySelector('.container').addEventListener('mousewheel', scrollH, false);
      document.querySelector('.container').addEventListener('DOMMouseScroll', scrollH, false);
    }
  },[])
  
  return (
    <div className="main">
      <div className="title">
        OUR WORK
      </div>
      <div className='container'>
        <div className="item">
          <img src="images/demo01/test1.jpg" alt="test1" />
        </div>
        <div className="item">
          <img src="images/demo01/test2.jpg" alt="test2" />
        </div>
        <div className="item">
          <img src="images/demo01/test3.jpg" alt="test3" />
        </div>
        <div className="item">
          <img src="images/demo01/test4.jpg" alt="test4" />
        </div>
      </div>
    </div>
  );
}

export default Demo;