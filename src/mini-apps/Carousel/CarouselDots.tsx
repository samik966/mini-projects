import { cn } from "@/lib/utils";
import style from "./CarouselDots.module.css";
type CarouselDotsProps = {
    slides: {
        id: number;
    }[];
    active: number;
    setActive: (isActive: number) => void;
};

const CarouselDots = ({ slides, active, setActive }: CarouselDotsProps) => {
    const getDotClass = (id: number) =>
        active === id ? cn(style.dot, style.activeDot) : style.dot;

    const handleDotClick = (id: number) => setActive(id);

    return (
        <div className={style.dots}>
            {slides.map((slide) => (
                <span
                    key={slide.id}
                    className={getDotClass(slide.id)}
                    onClick={() => handleDotClick(slide.id)}
                />
            ))}
        </div>
    );
};

export default CarouselDots;
