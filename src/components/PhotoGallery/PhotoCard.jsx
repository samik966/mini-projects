import style from './PhotoCard.module.css'

const PhotoCard = ({ image, alt }) => {
  return (
    <div className={style.card}>
      <img className={style.image} src={image.thumb} alt={alt} />
    </div>
  )
}

export default PhotoCard