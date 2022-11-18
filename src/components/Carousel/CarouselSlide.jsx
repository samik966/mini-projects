import { clx } from 'utils/clx'
import style from './CarouselSlide.module.css'

const CarouselSlide = ({ slide, active }) => {
  const { id, slide: src } = slide

  const getSlideClass = (id) =>
    active === id ? clx(style.slide, style.activeSlide) : style.slide

  return (
    <div className={getSlideClass(id)}>
      <img src={src} alt='carousel item' />
    </div>
  )
}

export default CarouselSlide
