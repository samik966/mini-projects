import { clx } from 'utils/clx'
import style from './CarouselDots.module.css'

const CarouselDots = ({ slides, active, setActive }) => {
  
	const getDotClass = (id) =>
  active === id ? clx(style.dot, style.activeDot) : style.dot

const handleDotClick = (id) => setActive(id)

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
  )
}

export default CarouselDots