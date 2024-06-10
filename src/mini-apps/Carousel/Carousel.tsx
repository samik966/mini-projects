import slides from "@/assets/data/carousel.json";
import { useState } from "react";
import style from "./Carousel.module.css";
import CarouselActions from "./CarouselActions";
import CarouselDots from "./CarouselDots";
import CarouselSlide from "./CarouselSlide";

export interface Slide {
    id: number;
    slide: string;
}

const Carousel = () => {
    const [currentSlideId, setCurrentSlideId] = useState(1);

    return (
        <div className={style.carouselContainer}>
            <div className={style.carouselSlides}>
                {slides.map((slide) => (
                    <CarouselSlide currentSlideId={currentSlideId} slide={slide} key={slide.id} />
                ))}
            </div>
            <CarouselActions
                slidesLength={slides.length}
                currentSlideId={currentSlideId}
                setCurrentSlideId={setCurrentSlideId}
            />
            <CarouselDots slides={slides} active={currentSlideId} setActive={setCurrentSlideId} />
        </div>
    );
};

export default Carousel;
