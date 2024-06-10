import style from "./CarouselActions.module.css";

type CarouselActionsProps = {
    currentSlideId: number;
    setCurrentSlideId: (slideId: number) => void;
    slidesLength: number;
};

const CarouselActions = ({
    currentSlideId,
    setCurrentSlideId,
    slidesLength,
}: CarouselActionsProps) => {
    const handleArrowClick = (direction: "left" | "right") => {
        if (direction === "left") {
            const newSlideId = currentSlideId === 1 ? slidesLength : currentSlideId - 1;
            setCurrentSlideId(newSlideId);
        } else {
            const newSlideId = currentSlideId === slidesLength ? 1 : currentSlideId + 1;
            setCurrentSlideId(newSlideId);
        }
    };

    return (
        <div className={style.actions}>
            <div className={style.actionButton} onClick={() => handleArrowClick("left")}>
                {"<"}
            </div>
            <div className={style.actionButton} onClick={() => handleArrowClick("right")}>
                {">"}
            </div>
        </div>
    );
};

export default CarouselActions;
