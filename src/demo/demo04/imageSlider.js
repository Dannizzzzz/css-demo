import { useState } from "react";

const ImageSlider = ({slides}) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeImg, setActiveImg] = useState(false);
    const goAfter = (e) => {
        const isLastSlide = currentIndex === 3;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
        setActiveImg(true);
    }
    const handleAnimationEvent =() => {
        setActiveImg(false)
    }
    return (
        <div className="container">
            <div className="btn">
                <div className="btn-next" onClick={goAfter}>NEXT</div>
            </div>
            <div>
                <img src={slides[currentIndex].url} className={`${activeImg ? "active transition-start right" : ""}`} onAnimationEnd={handleAnimationEvent} alt=""/>
            </div>
        </div>
    )
}
export default ImageSlider;