import { Slide } from "@/mini-apps/Carousel/Carousel";

import { cn } from "@/lib/utils";
import style from "./CarouselSlide.module.css";

type CarouselSlideProps = { slide: Slide; currentSlideId: number };

const CarouselSlide = ({ slide, currentSlideId }: CarouselSlideProps) => {
    const { id, slide: src } = slide;

    const getSlideClass = (id: number) =>
        currentSlideId === id ? cn(style.slide, style.activeSlide) : style.slide;

    return (
        <div className={getSlideClass(id)}>
            <img src={src} alt="carousel item" />
        </div>
    );
};

export default CarouselSlide;
