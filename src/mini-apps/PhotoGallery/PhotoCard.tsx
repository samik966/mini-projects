import style from "./PhotoCard.module.css";

const PhotoCard = ({
    image,
    alt,
}: {
    image: {
        thumb: string;
    };
    alt: string;
}) => {
    return (
        <div className={style.card}>
            <img className={style.image} src={image.thumb} alt={alt} />
        </div>
    );
};

export default PhotoCard;
