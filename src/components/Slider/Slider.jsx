import { useState } from "react"
import leftChevron from "../../assets/left-arrow.svg"
import rightChevron from "../../assets/right-arrow.svg"
import "./Slider.css"
import sliderData from "../../data/sliderData"

export default function Slider() {
  const [currentIndex, setCurrentIndex] = useState(1)

    function toggleImage(indexPayload ) {
        let newState;
        if (indexPayload + currentIndex > sliderData.length) {
            newState = 1;
        } else if (indexPayload + currentIndex < 1) {
            newState = sliderData.length;
        } else {
            newState = indexPayload + currentIndex;
        }
        setCurrentIndex(newState);
    }

  return (
    <>
        <p className="index-info"> {currentIndex} / {sliderData.length} </p>
        <div className="slider">
            <p className="image-info">{sliderData.find(obj => obj.id === currentIndex)?.description}</p>
            <img src={`/images/img-${currentIndex}.jpg`}   alt="estate's room" className="slider-img" />

            <button onClick={() => toggleImage(-1)}
            className="navigation-button prev-button">
                <img src={leftChevron} alt="previous" />
            </button>
            <button onClick={() => toggleImage(1)}
            className="navigation-button next-button">
                <img src={rightChevron} alt="next" />
            </button>

        </div>
    </>
  )
}